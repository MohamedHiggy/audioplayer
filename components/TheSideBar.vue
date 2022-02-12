<template>
  <aside class="border-right shadow-sm aside-nav" :class="{ active: activeAside }">
    <div class="aside-brand text-decoration-none border-b-0">Logo</div>

    <ul class="nav flex-column aside-nav-ul main-list-style">
      <li class="nav-item" v-for="(link, index) in mainLinks" :key="index">
        <nuxt-link :to="link.redirect" class="nav-link" exact>
          <div class="icon" v-html="link.icon"></div>
          <span class="title">{{ link.title }}</span>
        </nuxt-link>
      </li>
    </ul>

    <ul class="nav flex-column aside-nav-ul">
      <li class="nav-item" v-for="(link, index) in sideLinks" :key="index">
        <nuxt-link :to="link.redirect" class="nav-link" exact>
          <div class="icon" v-html="link.icon"></div>
          <span class="title">{{ link.title }}</span>
        </nuxt-link>
      </li>
    </ul>

    <p class="aside-version">Version 5.0.0</p>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      mainLinks: [
        {
          title: "Home",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_35496" data-name="Group 35496" transform="translate(-38 -736)">
                    <g id="Group_27418" data-name="Group 27418" transform="translate(38 736)">
                      <g id="Group_27417" data-name="Group 27417">
                        <rect id="Rectangle_5674" data-name="Rectangle 5674" width="32" height="32" fill="none"/>
                        <path id="Path_169343" data-name="Path 169343" d="M26.057,56.426l-7.68-5.373a6.47,6.47,0,0,0-7.32.173l-6.68,5.213A6.87,6.87,0,0,0,1.99,61.293v9.2a6.174,6.174,0,0,0,6.16,6.173H22.523a6.163,6.163,0,0,0,6.16-6.16v-9.04A6.8,6.8,0,0,0,26.057,56.426Zm-9.72,14.907a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Z" transform="translate(0.676 -47.336)" fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>`,
          redirect: "/",
        },
        {
          title: "Discover",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g id="Group_35497" data-name="Group 35497" transform="translate(-38 -736)">
                  <g id="Group_27418" data-name="Group 27418" transform="translate(38 736)">
                    <g id="Group_27417" data-name="Group 27417">
                      <rect id="Rectangle_5674" data-name="Rectangle 5674" width="32" height="32" fill="none"/>
                      <path id="Path_169346" data-name="Path 169346" d="M2,15.333A13.333,13.333,0,1,1,15.333,28.667,13.33,13.33,0,0,1,2,15.333Zm16.307,2.44,2.16-6.827a.6.6,0,0,0-.747-.76L12.893,12.32a.89.89,0,0,0-.587.587l-2.133,6.84a.6.6,0,0,0,.747.747l6.8-2.133A.864.864,0,0,0,18.307,17.773Z" transform="translate(0.667 0.667)" fill="#fff"/>
                    </g>
                  </g>
                </g>
              </svg>
              `,
          redirect: "/discover",
        },
        {
          title: "Library",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g id="Group_35500" data-name="Group 35500" transform="translate(-38 -705)">
                  <g id="Group_27418" data-name="Group 27418" transform="translate(38 705)">
                    <g id="Group_27417" data-name="Group 27417">
                      <rect id="Rectangle_5674" data-name="Rectangle 5674" width="32" height="32" fill="none"/>
                      <g id="Group_35501" data-name="Group 35501" transform="translate(2.665 1.332)">
                        <path id="Path_284592" data-name="Path 284592" d="M22.25,5.75h-16a1,1,0,0,1,0-2h16a1,1,0,0,1,0,2Z" transform="translate(-0.911 -0.417)" fill="#fff"/>
                        <path id="Path_284593" data-name="Path 284593" d="M17.25,3.25h-8a1,1,0,1,1,0-2h8a1,1,0,1,1,0,2Z" transform="translate(0.089 -1.25)" fill="#fff"/>
                        <path id="Subtraction_5" data-name="Subtraction 5" d="M21.338,20.005h-16A5.345,5.345,0,0,1,0,14.671V5.34A5.348,5.348,0,0,1,5.341,0h16a5.343,5.343,0,0,1,5.333,5.34v9.332A5.34,5.34,0,0,1,21.338,20.005ZM7.995,4.024A1.3,1.3,0,0,0,6.673,5.367v8.041a1.378,1.378,0,0,0,1.162,1.321l.19.022a16.853,16.853,0,0,1,4.065,1.19.494.494,0,0,0,.205.041.513.513,0,0,0,.518-.522V5.9a.488.488,0,0,0-.255-.446A12.48,12.48,0,0,0,8.11,4.03C8.071,4.027,8.031,4.024,7.995,4.024Zm10.5.005a12.84,12.84,0,0,0-4.385,1.4.524.524,0,0,0-.261.459v9.546a.516.516,0,0,0,.518.524.491.491,0,0,0,.2-.043,18.154,18.154,0,0,1,4.037-1.182l.22-.019a1.382,1.382,0,0,0,1.162-1.326V5.481A1.452,1.452,0,0,0,18.541,4.03Z" transform="translate(0 7.664)" fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              `,
          redirect: "/library",
        },
      ],
      sideLinks: [
        {
          title: "Profile",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_35512" data-name="Group 35512" transform="translate(-91 -577)">
                    <rect id="Rectangle_2692" data-name="Rectangle 2692" width="32" height="32" transform="translate(91 577)" fill="none"/>
                    <g id="Group_28726" data-name="Group 28726" transform="translate(97.669 579.667)">
                      <path id="Path_233636" data-name="Path 233636" d="M13.583,2a6.328,6.328,0,0,0-.16,12.653,1.076,1.076,0,0,1,.293,0h.093A6.329,6.329,0,0,0,13.583,2Z" transform="translate(-4.197 -2)" fill="#fff"/>
                      <path id="Path_233637" data-name="Path 233637" d="M21.12,14.615a13.239,13.239,0,0,0-13.533,0A5.263,5.263,0,0,0,4.96,18.922,5.219,5.219,0,0,0,7.573,23.2a12.319,12.319,0,0,0,6.773,1.88A12.319,12.319,0,0,0,21.12,23.2a5.261,5.261,0,0,0,2.613-4.307A5.25,5.25,0,0,0,21.12,14.615Z" transform="translate(-4.96 1.585)" fill="#fff"/>
                    </g>
                  </g>
                </svg>
                `,
          redirect: "/profile",
        },
        {
          title: "Playlists",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_35513" data-name="Group 35513" transform="translate(-91 -577)">
                    <rect id="Rectangle_2692" data-name="Rectangle 2692" width="32" height="32" transform="translate(91 577)" fill="none"/>
                    <g id="Group_28446" data-name="Group 28446" transform="translate(93.667 579.667)">
                      <path id="Path_233469" data-name="Path 233469" d="M28.917,4.25H2.25a1,1,0,0,1,0-2H28.917a1,1,0,0,1,0,2Z" transform="translate(-1.25 -2.25)" fill="#fff"/>
                      <path id="Path_233470" data-name="Path 233470" d="M14.25,10.25h-12a1,1,0,0,1,0-2h12a1,1,0,0,1,0,2Z" transform="translate(-1.25 -0.25)" fill="#fff"/>
                      <path id="Path_233471" data-name="Path 233471" d="M10.25,16.25h-8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z" transform="translate(-1.25 1.75)" fill="#fff"/>
                      <path id="Path_233472" data-name="Path 233472" d="M7.583,22.25H2.25a1,1,0,0,1,0-2H7.583a1,1,0,1,1,0,2Z" transform="translate(-1.25 3.75)" fill="#fff"/>
                      <path id="Path_233473" data-name="Path 233473" d="M26.177,7.821a3.494,3.494,0,0,0-3.133-.373l-5.8,1.573a3.3,3.3,0,0,0-2.52,3.293v8.307a3.85,3.85,0,0,0-1.907-.52,3.907,3.907,0,1,0,3.907,3.907V16.475l8.64-2.36v4.573a3.85,3.85,0,0,0-1.907-.52,3.907,3.907,0,1,0,3.907,3.907V10.741A3.426,3.426,0,0,0,26.177,7.821ZM12.817,25.915a1.907,1.907,0,1,1,1.907-1.907A1.906,1.906,0,0,1,12.817,25.915Zm10.64-1.933a1.907,1.907,0,1,1,1.907-1.907A1.906,1.906,0,0,1,23.457,23.981Z" transform="translate(1.303 -0.581)" fill="#fff"/>
                    </g>
                  </g>
                </svg>
                `,
          redirect: "/playlists",
        },
        {
          title: "Referral",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_35514" data-name="Group 35514" transform="translate(-37 -334)">
                    <rect id="Rectangle_6127" data-name="Rectangle 6127" width="32" height="32" transform="translate(37 334)" fill="none"/>
                    <g id="Group_28681" data-name="Group 28681" transform="translate(39.667 336.666)">
                      <path id="Path_233588" data-name="Path 233588" d="M25.333,12.333v8A5.332,5.332,0,0,1,20,25.667H9.333A5.332,5.332,0,0,1,4,20.333v-8A1.337,1.337,0,0,1,5.333,11H7.96a1.337,1.337,0,0,1,1.333,1.333V16.52a2.685,2.685,0,0,0,1.413,2.36,2.578,2.578,0,0,0,1.253.32,2.617,2.617,0,0,0,1.453-.44l1.267-.827,1.173.787a2.628,2.628,0,0,0,2.72.147A2.656,2.656,0,0,0,20,16.507V12.333A1.337,1.337,0,0,1,21.333,11H24A1.337,1.337,0,0,1,25.333,12.333Z" transform="translate(-2 0.997)" fill="#fff"/>
                      <path id="Path_233589" data-name="Path 233589" d="M27.833,7.667V9a2.4,2.4,0,0,1-2.667,2.667h-20A2.369,2.369,0,0,1,2.5,9V7.667A2.369,2.369,0,0,1,5.167,5h20A2.4,2.4,0,0,1,27.833,7.667Z" transform="translate(-2.5 -1.003)" fill="#fff"/>
                      <path id="Path_233590" data-name="Path 233590" d="M13.562,6H6.2a1.249,1.249,0,0,1,.04-1.733L8.136,2.372a1.28,1.28,0,0,1,1.8,0Z" transform="translate(-1.376 -2.002)" fill="#fff"/>
                      <path id="Path_233591" data-name="Path 233591" d="M19.71,6H12.35l3.627-3.627a1.28,1.28,0,0,1,1.8,0L19.67,4.266A1.249,1.249,0,0,1,19.71,6Z" transform="translate(0.783 -2.002)" fill="#fff"/>
                      <path id="Path_233592" data-name="Path 233592" d="M15.647,11a1.337,1.337,0,0,1,1.333,1.333v4.173a1.325,1.325,0,0,1-2.067,1.107l-1.2-.8a1.332,1.332,0,0,0-1.467,0l-1.253.827A1.323,1.323,0,0,1,8.94,16.533v-4.2A1.337,1.337,0,0,1,10.274,11Z" transform="translate(-0.353 0.997)" fill="#fff"/>
                    </g>
                  </g>
                </svg>
                `,
          redirect: "/referral",
        },
        {
          title: "History",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_35515" data-name="Group 35515" transform="translate(-36 -398)">
                    <rect id="Rectangle_6128" data-name="Rectangle 6128" width="32" height="32" transform="translate(36 398)" fill="none"/>
                    <path id="Path_233593" data-name="Path 233593" d="M20.92,2H9.747C4.893,2,2,4.893,2,9.747v11.16c0,4.867,2.893,7.76,7.747,7.76h11.16c4.853,0,7.747-2.893,7.747-7.747V9.747C28.667,4.893,25.773,2,20.92,2Zm1.427,10.613-3.08,3.973a2.276,2.276,0,0,1-1.56.88,2.313,2.313,0,0,1-1.733-.48l-2.44-1.92A.292.292,0,0,0,13.28,15a.3.3,0,0,0-.227.133L9.88,19.253a1,1,0,0,1-.787.387.981.981,0,0,1-.613-.213,1,1,0,0,1-.187-1.4l3.173-4.12a2.336,2.336,0,0,1,3.293-.413l2.44,1.92a.285.285,0,0,0,.253.067.3.3,0,0,0,.227-.133l3.08-3.973a.986.986,0,0,1,1.4-.173A1.019,1.019,0,0,1,22.347,12.613Z" transform="translate(36.667 398.667)" fill="#fff"/>
                  </g>
                </svg>
                `,
          redirect: "/history",
        },
        {
          title: "Settings",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_35516" data-name="Group 35516" transform="translate(-36 -398)">
                    <rect id="Rectangle_6128" data-name="Rectangle 6128" width="32" height="32" transform="translate(36 398)" fill="none"/>
                    <path id="Path_233594" data-name="Path 233594" d="M26.133,11.44c-2.413,0-3.4-1.707-2.2-3.8A2.529,2.529,0,0,0,23,4.186l-2.307-1.32a2.225,2.225,0,0,0-3.04.8l-.147.253c-1.2,2.093-3.173,2.093-4.387,0l-.147-.253a2.188,2.188,0,0,0-3.013-.8L7.653,4.186A2.544,2.544,0,0,0,6.72,7.653c1.213,2.08.227,3.787-2.187,3.787A2.541,2.541,0,0,0,2,13.973V16.32a2.541,2.541,0,0,0,2.533,2.533c2.413,0,3.4,1.707,2.187,3.8a2.529,2.529,0,0,0,.933,3.453l2.307,1.32a2.225,2.225,0,0,0,3.04-.8l.147-.253c1.2-2.093,3.173-2.093,4.387,0l.147.253a2.225,2.225,0,0,0,3.04.8l2.307-1.32a2.532,2.532,0,0,0,.933-3.453c-1.213-2.093-.227-3.8,2.187-3.8A2.541,2.541,0,0,0,28.68,16.32V13.973A2.561,2.561,0,0,0,26.133,11.44Zm-10.8,8.04a4.333,4.333,0,1,1,4.333-4.333A4.342,4.342,0,0,1,15.333,19.48Z" transform="translate(36.665 399.439)" fill="#fff"/>
                  </g>
                </svg>
                `,
          redirect: "/settings",
        },
        {
          title: "Akhdar Content",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_35512" data-name="Group 35512" transform="translate(-91 -577.001)">
                    <rect id="Rectangle_2692" data-name="Rectangle 2692" width="32" height="32" transform="translate(91 577.001)" fill="none"/>
                    <g id="Group_35551" data-name="Group 35551" transform="translate(92.5 578.001)">
                      <path id="Path_284598" data-name="Path 284598" d="M16.094,2.261a.826.826,0,0,0-1.415.556V7.225A3.443,3.443,0,0,0,18.153,10.6c1.2.013,2.867.013,4.295.013a.8.8,0,0,0,.594-1.352C21.223,7.428,17.964,4.131,16.094,2.261Z" transform="translate(3.205 0.004)" fill="#fff"/>
                      <path id="Path_284599" data-name="Path 284599" d="M25.237,12.345H21.586a5.439,5.439,0,0,1-5.432-5.432V3.263A1.267,1.267,0,0,0,14.892,2H9.536A6.666,6.666,0,0,0,2.5,9.036V20.227a6.666,6.666,0,0,0,7.036,7.036h9.928A6.666,6.666,0,0,0,26.5,20.227V13.608A1.267,1.267,0,0,0,25.237,12.345ZM13.868,21.895H8.816a.947.947,0,0,1,0-1.895h5.053a.947.947,0,0,1,0,1.895Zm2.526-5.053H8.816a.947.947,0,0,1,0-1.895h7.579a.947.947,0,1,1,0,1.895Z" fill="#fff"/>
                    </g>
                  </g>
                </svg>
                `,
          redirect: "/akhdar-content",
        },
        {
          title: "Help Center",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_35517" data-name="Group 35517" transform="translate(-36 -398)">
                    <rect id="Rectangle_6128" data-name="Rectangle 6128" width="32" height="32" transform="translate(36 398)" fill="none"/>
                    <path id="Path_233597" data-name="Path 233597" d="M22,2.43H8.667A6.3,6.3,0,0,0,2,9.1v8a6.3,6.3,0,0,0,6.667,6.667V26.6a1.325,1.325,0,0,0,2.067,1.107l5.933-3.947H22A6.3,6.3,0,0,0,28.667,17.1v-8A6.3,6.3,0,0,0,22,2.43ZM15.333,18.657a1,1,0,1,1,1-1A1,1,0,0,1,15.333,18.657Zm1.68-5.533c-.52.347-.68.573-.68.947v.28a1,1,0,1,1-2,0v-.28a3.1,3.1,0,0,1,1.56-2.6c.493-.333.653-.56.653-.907a1.213,1.213,0,1,0-2.427,0,1,1,0,1,1-2,0,3.213,3.213,0,1,1,6.427,0A3.059,3.059,0,0,1,17.013,13.124Z" transform="translate(36.667 399.57)" fill="#fff"/>
                  </g>
                </svg>
                `,
          redirect: "/help-center",
        },
      ],
    };
  },
  props: {
    activeAside: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
