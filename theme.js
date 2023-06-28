function waitForElement(els, func, timeout = 100) {
    const queries = els.map(el => document.querySelector(el));
    if (queries.every(a => a)) {
        func(queries);
    } else if (timeout > 0) {
        setTimeout(waitForElement, 300, els, func, --timeout);
    }
}

waitForElement([".main-navBar-entryPoints .GlueDropTarget:has(> .main-createPlaylistButton-button)"], ([nodeToBeRemoved]) => {
		
    nodeToBeRemoved.parentNode.parentNode.insertBefore(nodeToBeRemoved, nodeToBeRemoved.parentNode);
		
    });


	