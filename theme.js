/* function was yoinked from dribbblish theme */
function waitForElement(els, func, timeout = 100) {
    const queries = els.map(el => document.querySelector(el));
    if (queries.every(a => a)) {
        func(queries);
    } else if (timeout > 0) {
        setTimeout(waitForElement, 300, els, func, --timeout);
    }
}

waitForElement([".main-navBar-entryPoints .GlueDropTarget:has(> .main-createPlaylistButton-button)"], ([nodeToBeMoved]) => {		
    nodeToBeMoved.parentNode.parentNode.insertBefore(nodeToBeMoved, nodeToBeMoved.parentNode);
		
});


	