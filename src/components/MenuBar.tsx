import React, { useEffect, useRef, useState } from 'react';

type MenuBarType = {
    children: React.ReactNode;
}

const MenuBar: React.FC<MenuBarType> = ({ children }) => {
    return <div className="">{children}</div>
}

export { MenuBar };