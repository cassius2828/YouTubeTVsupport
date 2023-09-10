const data = [
  {
    title: "Turning on the PS5",
    heroStep: null,
    steps: [
      `Turn on the PS5 with the "PS" button on the media remote or with the PS5 game controller`,

      "Click the first profile (Andrew Wiggins picture)",
      `You will now be in the playstation home screen or wherever the system left off at. Return home by pressing the "PS" button on the media remote`,
    ],
  },
  {
    title: "Using the playstation media remote",
    heroStep: null,
    steps: [
      "To quickly navigate to a preselected option, simply press one of the four options on the bottom e.g Netflix, Disney+, YouTube(this is NOT YouTube TV), Spotify",
      "The “TV” button turns the TV on and off",
      "There is a voice command button that we will go over later",
      "The PS logo button at the very bottom is how to navigate to the PS5 home screen. This allows you to switch apps and turn the playstation off",
      "Use the left, right, up, down, and select buttons in the middle of the remote like you would on other like kind remotes. This is the default method of navigation",
      "There is a back button that will take you back one step from wherever you are at, it looks like a curled arrow going backwards",
    ],
  },
  {
    title: "navigating the YouTube TV app",
    heroStep: "to find the app the normal way",
    steps: [
      "go to the home screen of the playstation",
      "There will be a game tab and a media tab; go to the media tab ",
      "look for YouTube TV in the recents (it is the black background YouTube, the white background is regular YouTube)",
      "if YouTube TV is not in the recents, go all the way to the right to “app library”, it can be found there as well",
    ],
  },
  //   either going to be steps.map(i => i) for only steps or steps.map(i => i?.section, i?.description, etc)
  {
    title: "using the YouTube TV app",
    heroStep: null,
    steps: [
      {
        section:
          "You typically start at the home screen. The home screen has multiple convenient options for you",
        description: null,
        details: [
          [
            "Top Picks for You:",
            " This gives suggestions on things to watch based on viewing history",
          ],
          [
            "Category Search:",
            " Provides many tabs to filter results based on what  you want. EX: 4k will show all streams that are available in 4k. Football will filter by football. Reality will filter by reality TV. Etc.",
          ],
          [
            "Resume Watching:",
            " continue watching programs from where you left off",
          ],
          [
            "Upcoming Games:",
            " Provides details on upcoming sporting event matchups",
          ],
          [
            "Add to Membership:",
            " Shows programs that are not currently in our package",
          ],
          [
            "Watch in Multiview:",
            " Allows you to view multiple sporting events at the same time, splits the screen in 2 or 4",
          ],
          [
            "Go to Channels:",
            " This option is at the very bottom. All other options are self-explanatory ",
          ],
        ],
      },
      {
        section: "Library",
        description:
          "This contains recorded programs. Here are more details about recorded programs",
        details: [
          ["recording space", " There is unlimted recoding space"],
          [
            "cusotmize library",
            " You can customize select sport teams or programs to automatically record. EX: I set up the 49ers and Warrior games to automatically be recorded. You can do this with any show you’d like by adding it to your library in the home section",
          ],
          [
            "filter library",
            " Recordings can be filtered by sports or all if you have a lot of recordings and want to sort through them faster",
          ],
          [
            "how to record a program",
            " To record a show, simply click on the show in the live section and then select “add to library”",
          ],
          [
            "record upcoming programs",
            " You can record all new upcoming episodes of a show from the guide section which we will go over next",
          ],
          [
            "remove a recoding",
            " To remove a download, click on the show and then click on the “added to library”. This will toggle the recording and unselect it from the library",
          ],
        ],
      },
      {
        section: "live",
        description:
          "This is the TV guide. You will go here to scroll through channels and add shows to your library",
        details: [
          [
            "custom guide",
            " I will set up a special lineup so all of your favorite channels appear at the front, if you want it adjusted please let me know",
          ],
          [
            "add to library from guide",
            "Go through the guide and click on a show to be able to add it to your library",
          ],
          [
            "continuous recording",
            " If there is a channel that has a show you want to continuously record, then click on the channel icon on the left part of the screen, the background color should be highlighted when you are targeting the icon",
          ],
          [
            "actually record the program",
            "Once you click on the icon, you will see multiple sorting options on the left and upcoming shows on the right. To record the program you want, navigate from the categories on the left and then simply go over and click the program you want to record",
          ],
          [
            "see upcoming and watch reruns",
            " In this section, you can record shows and watch reruns that are available. You can see the upcoming schedule, about the cast, suggested for you, and add to library at the top",
          ],
        ],
      },
      {
        section: "add programs and buy movies",
        description:
          "This section is where you can add-on to your subscription plan",
        details: [
          [
            "Examples",
            "You can buy NFL Sunday Ticket to get all NFL games available, or you can buy HBO Max to get access to all HBO Max content. Prices are shown by the program",
          ],
          [
            "Rent or Buy Movies",
            "Rent or Buy Movies allows you to do just that. Typically newer movies. I would search to see if the movie is available for free somewhere else before buying or renting",
          ],
        ],
      },
      {
        section: "Search",
        description: " search for content",
      },
    ],
  },
  {
    title: "voice command",
    heroStep: "",
    steps: [
      {
        section: "Opening Apps",
        description: null,
        details: [
          [
            "voice command button:",
            " The top middle button on the media remote is the voice command button. Use this to quickly navigate around OUTSIDE of the app. ",
          ],
          [
            "how to use it:",
            " Tap the button once to speak into it, tap it again to close the voice command option",
          ],
          [
            "Ideal Usage:",
            " The best usage for this is to tell the remote “Open Youtube TV” or whatever app it is you want to open (Netflix, Prime Video, Hulu, etc)",
          ],
          [
            "How to select an option:",
            " After doing this, it will give you options of what you may mean, typically it will show a numbered list with the apps you can navigate to. To select the app you want, simply say the number into the remote",
          ],
        ],
      },
      {
        section: "turning off the playstation",
        description: null,
        details: [
          ["Turn it off:", " Press the button and say “turn off playstation”"],
          [
            "Confirm choice:",
            " It will then ask you to confirm by saying yes or no, confirm your intended decision and the remote will act accordingly",
          ],
        ],
      },
      {
        section: "go to settings",
        description: null,
        details: [
          [
            "How to go to settings:",
            " Tell the remote to go to settings, and it will take you there if need be",
          ],
        ],
      },
    ],
  },
];

export default data;