document.addEventListener("DOMContentLoaded", function () {
  // FOOTER
  const footerData = `
    <section id="footer">
      <div class="inner">
        <h2 class="major">INFORMATION</h2>

        <p class="company-info">
          <span>상호 : (주)인센스</span>
          <span>대표자 : 정승범</span>
          <span>사업자등록번호 : 872-88-02129</span>
          <span class="break"></span>
          <span>주소 : 경기도 화성시 동탄대로21길 10 1009호(더퍼스트타워)</span>
          <span>이메일 : sbjeong@insense.co.kr</span>
        </p>

        <ul class="copyright">
          <li>&copy; 2024 inSENSE Inc. Engineered for Excellence.</li>
          <li style="font-size: 15px; opacity: 0.5;">
            Design: <a href="https://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  `;

  document.getElementById("footer-placeholder").innerHTML = footerData;

});
