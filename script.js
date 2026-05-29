const year = document.querySelector("#year");
const copyButton = document.querySelector("#copyPhone");
const copyStatus = document.querySelector("#copyStatus");
const phone = "13923357828";

if (year) {
  year.textContent = new Date().getFullYear();
}

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(phone);
      copyStatus.textContent = "电话已复制";
    } catch {
      copyStatus.textContent = `请手动复制：${phone}`;
    }
  });
}
