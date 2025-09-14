async function updateTabCount() {
  const tabs = await chrome.tabs.query({ currentWindow: true });
  const tabCount = tabs.length.toString();

  chrome.action.setBadgeText({ text: tabCount });
  chrome.action.setBadgeBackgroundColor({ color: '#4CAF50' });
}

chrome.runtime.onInstalled.addListener(() => {
  console.log('Dev Helper instalado.');
  updateTabCount();
});

chrome.tabs.onCreated.addListener(updateTabCount);
chrome.tabs.onRemoved.addListener(updateTabCount);
chrome.tabs.onAttached.addListener(updateTabCount);
chrome.tabs.onDetached.addListener(updateTabCount);

chrome.windows.onFocusChanged.addListener(updateTabCount);