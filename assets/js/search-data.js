// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "My publication list.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Some of my repositories from github.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv-profile",
          title: "CV/Profile",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-write-your-own-youtube-ad-blocker",
      
        title: "Write your own YouTube Ad-blocker",
      
      description: "An attempt to custom YouTube Ad-blocker.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/custom-youtube-adblocker/";
        
      },
    },{id: "news-presented-paper-improving-reliable-navigation-under-uncertainty-via-predictions-informed-by-non-local-information-at-iros-23",
          title: 'Presented Paper: Improving Reliable Navigation under Uncertainty via Predictions Informed by Non-Local Information...',
          description: "",
          section: "News",},{id: "news-accepted-paper-active-information-gathering-for-long-horizon-navigation-under-uncertainty-by-learning-the-value-of-information-at-iros-24",
          title: 'Accepted Paper: Active Information Gathering for Long-Horizon Navigation Under Uncertainty by Learning the...',
          description: "",
          section: "News",},{id: "news-presented-paper-active-information-gathering-for-long-horizon-navigation-under-uncertainty-by-learning-the-value-of-information-at-iros-24",
          title: 'Presented Paper: Active Information Gathering for Long-Horizon Navigation Under Uncertainty by Learning the...',
          description: "",
          section: "News",},{id: "news-accepted-paper-anticipatory-planning-for-performant-long-lived-robot-in-large-scale-home-like-environments-at-icra-25",
          title: 'Accepted Paper: Anticipatory Planning for Performant Long-Lived Robot in Large-Scale Home-Like Environments at...',
          description: "",
          section: "News",},{id: "news-presented-proposal-defense-presentation-and-advanced-to-candidacy",
          title: 'Presented: Proposal defense presentation and advanced to candidacy.',
          description: "",
          section: "News",},{id: "news-presented-pre-defense-dissertation-presentation-and-cleared-for-public-defense",
          title: 'Presented: Pre-defense dissertation presentation and cleared for public defense.',
          description: "",
          section: "News",},{id: "news-presented-dissertation-publicly-on-effective-long-horizon-planning-under-uncertainty-for-indoor-mobile-robots",
          title: 'Presented: Dissertation publicly on Effective Long-horizon Planning under Uncertainty for Indoor Mobile Robots....',
          description: "",
          section: "News",},{id: "news-graduated-with-a-ph-d-degree-in-computer-science-from-george-mason-university",
          title: 'Graduated with a Ph.D. degree in Computer Science from George Mason University.',
          description: "",
          section: "News",},{id: "news-accepted-paper-object-search-in-partially-known-environments-via-llm-informed-model-based-planning-and-prompt-selection-at-iros-26",
          title: 'Accepted Paper: Object Search in Partially-Known Environments via LLM-informed Model-based Planning and Prompt...',
          description: "",
          section: "News",},{id: "news-joined-university-of-lynchburg-i-have-recently-joined-university-of-lynchburg-as-an-assistant-professor-of-computer-science-within-the-school-of-liberal-arts-and-sciences",
          title: 'Joined University of Lynchburg: I have recently joined University of Lynchburg as an...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%72%6E%6F%62@%67%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/arnob2601", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/raihan-islam-arnob", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Oh3lnZ8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
