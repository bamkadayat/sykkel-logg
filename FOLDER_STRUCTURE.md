sykkel-logg/
├── public/                      # Static assets
├── src/
│   ├── store/                    # Redux store setup
│   │   ├── index.ts             # Configure Redux store
│   │   └── rootReducer.ts       # Combine reducers
│
│   ├── features/                # Feature slices (modular structure)
│   │   ├── rides/               # Ride logging, listing, detail
│   │   │   ├── components/      # Ride-related UI components
│   │   │   ├── RideForm.tsx     # Add/edit form
│   │   │   ├── ridesSlice.ts    # Redux logic
│   │   │   └── ridesAPI.ts      # Nhost GraphQL queries/mutations
│   │   └── auth/                # Auth logic (login/signup)
│
│   ├── components/              # Reusable components (buttons, modals)
│   │   ├── root/ 
│       │   └── Navbar.tsx
│       ├── ui/
│               
│
│   ├── pages/                   # Top-level routes
│   │   ├── Dashboard.tsx
│   │   ├── LogRide.tsx
│   │   ├── RideDetail.tsx
│   │   └── SignIn.tsx
│       └── SignUp.tsx
│   ├── services/                # Nhost client config, helpers
│   │   └── nhost.ts
│
│   ├── hooks/                   # Reusable custom hooks
│   ├── types/                   # Global TypeScript types
│   ├── utils/                   # Formatters, helpers, date utils
│   ├── App.tsx                  # App shell + routing
│   └── main.tsx                 # Entry point
│
├── .env                         # Nhost config
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── package.json
└── README.md
