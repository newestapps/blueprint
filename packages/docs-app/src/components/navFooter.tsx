/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import * as React from "react";

export const NavFooter: React.SFC = () => (
    <small className={classNames("docs-copyright", Classes.TEXT_MUTED)}>
        &copy; {new Date().getFullYear()}
        <svg className={Classes.ICON} viewBox="0 0 18 23" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.718 16.653L9 20.013l-7.718-3.36L0 19.133 9 23l9-3.868-1.282-2.48zM9 14.738c-3.297 0-5.97-2.696-5.97-6.02C3.03 5.39 5.703 2.695 9 2.695c3.297 0 5.97 2.696 5.97 6.02 0 3.326-2.673 6.022-5.97 6.022zM9 0C4.23 0 .366 3.9.366 8.708c0 4.81 3.865 8.71 8.634 8.71 4.77 0 8.635-3.9 8.635-8.71C17.635 3.898 13.77 0 9 0z" />
        </svg>
        <a href="https://www.palantir.com/" target="_blank">
            Palantir
        </a>
    </small>
);
