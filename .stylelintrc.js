"use strict";

module.exports = {
    extends: ["@glen-84/stylelint-config"],
    rules: {
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-group"]
            }
        ],
        "block-closing-brace-newline-after": [
            "always",
            {
                except: ["blockless-group"]
            }
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global", "export", "import", "local"]
            }
        ],
        "keyframes-name-pattern": [
            true,
            {
                ignorePseudoClasses: ["global", "export", "import", "local"]
            }
        ]
    }
};
