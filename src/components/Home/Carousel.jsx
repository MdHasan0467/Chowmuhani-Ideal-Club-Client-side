const Carousel = () => {
    return (
        <div className="md:m-5 m-2">
            <div className="carousel w-full h-96">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://scontent.fcgp40-1.fna.fbcdn.net/v/t39.30808-6/481666796_1013879750791360_8703506849044993491_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH-RPhQUk6A1vLsfffdiH-jhOlDcFsUi_uE6UNwWxSL-3uTo9ZNsWpbO8hXg0LQG0wp69TDa_9GBk7nzmoLfJ_M&_nc_ohc=55xyU5WZqFMQ7kNvwFSGbrr&_nc_oc=AdnmL5ieJqKkOAHTTQscmVcRISQhz_bJ9DsTEkqezuHz8nNiuhcwnlKMpsaEk5o7JD8&_nc_zt=23&_nc_ht=scontent.fcgp40-1.fna&_nc_gid=GECrfui4VmyrM1AIQSsSqg&_nc_ss=8&oh=00_AfyMpRJF6NftoBxbQTzWpFRp7t1mrs1CGQESCBOOPyeLYw&oe=69B1D76B"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-6/468322914_122121867218546262_577692378704775867_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeECr3AT8-nKAqtZQ9JYLprQ2UtU8sT0HgHZS1TyxPQeAYyyoVnkCy66uutjU9OYtThWYfUENKcGb73Ln1pgAMRu&_nc_ohc=Xk1d_sse1p4Q7kNvwE1A8ey&_nc_oc=AdmN85LyraUyuEqOkbrhMKSEzKQg2oILzpbYc5_8FmL2Njh43M0i_qmRDWXLoVSCKfE&_nc_zt=23&_nc_ht=scontent.fcgp36-1.fna&_nc_gid=wee5tqENKn947etWapec-A&_nc_ss=8&oh=00_AfwPUZR3QQ4YGDdikWp7rtwwoy9wT6G-3fZhwVihlPI91w&oe=69B1C59A"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-6/481342653_492710083894604_3570867451937176618_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeFpYLxmfr-CcL3mblzCp4NtlZ0T_5sP_MWVnRP_mw_8xUBFQRA7rgQlI1uu0z0aR56nQ0v4696DRi2utDp45Xns&_nc_ohc=p8pPgv2N2WQQ7kNvwEGnhUO&_nc_oc=Adn8xbpt3jcPQOEsKU24BWuNJjR3YfylUoWSCvOZ0jV7OEE47YUKZTrtkK70Sw-xfBs&_nc_zt=23&_nc_ht=scontent.fcgp36-1.fna&_nc_gid=e1Mi-LS4SjmG_ll4qELZHw&_nc_ss=8&oh=00_Afxhi_uu_XfAfJj9OiP4B3L_wisQw0_fWi-navK5RJv1Iw&oe=69B1D40A"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://scontent.fcgp40-1.fna.fbcdn.net/v/t39.30808-6/486349030_1179954390489965_5542225321748309382_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeGL0XEpthO8f7GSxhOc511H-2vN5IcGhhH7a83khwaGETQKXVr9PrJ8OJXhJ5BTuFxEScMvW65dn7R99Lv8rRxg&_nc_ohc=rZxBh4YYBdAQ7kNvwF-mFB-&_nc_oc=AdlMqVN-e0r8gGY4toV210R5wvDiWilCLpOjhCncPDr-mnRsYNA68qTzqGdNcEXiH_E&_nc_zt=23&_nc_ht=scontent.fcgp40-1.fna&_nc_gid=400Zx958EYsWWVECT439Ew&_nc_ss=8&oh=00_AfwVNzgPJL-eqpDZMukForjg4bgYP4GuWncpDCjt-WGnHA&oe=69B1F99F"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    )
}
export default Carousel;