import Log from "../libraries/Log";
import { CUSTOM_LINK_CSS_CLASSES, CUSTOM_LINK_CSS_SELECTORS } from "../slidedown/constants";
import { addCssClass } from "../utils";
import LocalStorage from "../utils/LocalStorage";
export class CustomLinkManager {
    constructor(config) {
        this.config = config;
    }
    async initialize() {
        var _a, _b;
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.enabled)) {
            return;
        }
        if (!(await this.loadSdkStyles())) {
            return;
        }
        Log.info("OneSignal: initializing customlink");
        if (!((_b = this.config) === null || _b === void 0 ? void 0 : _b.unsubscribeEnabled) && CustomLinkManager.isPushEnabled()) {
            this.hideCustomLinkContainers();
            return;
        }
        // traditional for-loop required here to avoid layout shift
        for (let i = 0; i < this.customlinkContainerElements.length; i++) {
            await this.injectMarkup(this.customlinkContainerElements[i]);
        }
    }
    async injectMarkup(element) {
        // clear contents
        element.innerHTML = '';
        await this.mountExplanationNode(element);
        await this.mountSubscriptionNode(element);
    }
    async mountExplanationNode(element) {
        var _a;
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.text)) {
            Log.error("CustomLink: required property 'text' is missing in the config");
            return;
        }
        if (this.config.text.explanation) {
            const explanation = document.createElement("p");
            explanation.textContent = this.config.text.explanation;
            addCssClass(explanation, CUSTOM_LINK_CSS_CLASSES.resetClass);
            addCssClass(explanation, CUSTOM_LINK_CSS_CLASSES.explanationClass);
            if (this.config.size) {
                addCssClass(explanation, this.config.size);
            }
            if (CustomLinkManager.isPushEnabled()) {
                addCssClass(explanation, CUSTOM_LINK_CSS_CLASSES.state.subscribed);
            }
            else {
                addCssClass(explanation, CUSTOM_LINK_CSS_CLASSES.state.unsubscribed);
            }
            element.appendChild(explanation);
        }
    }
    async mountSubscriptionNode(element) {
        var _a;
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.text)) {
            Log.error("CustomLink: required property 'text' is missing in the config");
            return;
        }
        if (this.config.text.subscribe) {
            const subscribeButton = document.createElement("button");
            addCssClass(subscribeButton, CUSTOM_LINK_CSS_CLASSES.resetClass);
            addCssClass(subscribeButton, CUSTOM_LINK_CSS_CLASSES.subscribeClass);
            if (this.config.size) {
                addCssClass(subscribeButton, this.config.size);
            }
            if (this.config.style) {
                addCssClass(subscribeButton, this.config.style);
            }
            if (CustomLinkManager.isPushEnabled()) {
                addCssClass(subscribeButton, CUSTOM_LINK_CSS_CLASSES.state.subscribed);
            }
            else {
                addCssClass(subscribeButton, CUSTOM_LINK_CSS_CLASSES.state.unsubscribed);
            }
            this.setCustomColors(subscribeButton);
            await this.setTextFromPushStatus(subscribeButton);
            subscribeButton.addEventListener("click", async () => {

