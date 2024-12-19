const $ = document

/// login chack
function hasUserTokenCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('user-token=')) {
      userAccountBtn.style.display = "none"
      outAcountBtn.style.display = "block"
    }
  }
}

function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    userAccountBtn.style.display = "block";
    outAcountBtn.style.display = "none"
    deleteCookie("user-token")
}

export { hasUserTokenCookie , deleteCookie }