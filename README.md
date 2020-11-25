"hidden wrapper ": {
    "prefix": "onrf",
    "body": [
      "<co-container id=\"hiddenWrapper\" rv-controller=\"sidebar\" rv-class-active-rf=\"activeRf\" rv-class-active-sd=\"activeSd\" user-label=\"Hidden wrapper\">",
      "    <co-container id=\"customWrapper\" class=\"custom-wrapper references-only\"   user-label=\"Wrapper\">",
      " <co-references-button id=\"referencesButton\" class=\"custom-button\"  rv-on-click=\"toggleActiveRf\"  rv-on-activate=\"activateRf\" rv-on-deactivate=\"deactivatePopup\"  model=\"m.common.referenceModel\" fixed=\"removing, animation, action, monitoring\" user-label=\"References\"></co-references-button>",
      "    </co-container>",
      "</co-container>"
    ],
    "description": "hidden wrapper only ref"
  },
  "hidden wrapper sd ref": {
    "prefix": "sdrf",
    "body": [
      "<co-container id=\"hiddenWrapper\" rv-controller=\"sidebar\" rv-class-active-rf=\"activeRf\" rv-class-active-sd=\"activeSd\" user-label=\"Hidden wrapper\">",
      "    <co-container id=\"customWrapper\" class=\"custom-wrapper\" user-label=\"Wrapper\">",
      "        <co-bg-open-popup-button id=\"studyDesignButton\" class=\"custom-button\" model=\"m.common.studyDesignButton\" rv-on-click=\"toggleActiveSd\" fixed=\"removing, animation, action, monitoring\" user-label=\"Study design button\"></co-bg-open-popup-button>",
      "        <co-references-button id=\"referencesButton\" class=\"custom-button\"  rv-on-click=\"toggleActiveRf\"  rv-on-activate=\"activateRf\" rv-on-deactivate=\"deactivatePopup\"  model=\"m.common.referenceModel\" fixed=\"removing, animation, action, monitoring\" user-label=\"References\"></co-references-button>",
      "        <co-popup id=\"sdPopup\" rv-on-activate=\"activateSd\" rv-on-deactivate=\"deactivatePopup\" model=\"m.common.sdPopup\" user-label=\"Popup\">",
      "        </co-popup>",
      "    </co-container>",
      "</co-container>"
    ],
    "description": "hidden wrapper sd ref"
  }
  
  
  
  "hidden wrapper ": {
    "prefix": "hwr",
    "body": [
      "#hiddenWrapper.active-rf #customWrapper,",
      "#hiddenWrapper.active-sd #customWrapper {",
      "  transform: matrix(1, 0, 0, 1, 0, 277);",
      "}"
    ],
    "description": "hidden wrapper "
  },
  "hidden wrapper sd ref": {
    "prefix": "sdrf",
    "body": [
      "#hiddenWrapper.active-rf #customWrapper,",
      "#hiddenWrapper.active-sd #customWrapper {",
      "  transform: matrix(1, 0, 0, 1, 0, 28);",
      "}"
    ],
    "description": "hidden wrapper sd ref"
  }
