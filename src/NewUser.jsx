let Users = [
    {
      name: "John Doe",
      username: "john_doe",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnMlMjBwcm9maWxlfGVufDB8MHwwfHx8MA%3D%3D",
      followers: 1500,
      following: 350,
      career: "Photographer",
      description: "Nature and wildlife photographer capturing the beauty of the outdoors.",
      posts: [
        {
          id: 1,
          caption: "A beautiful sunrise in the mountains.",
          image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHwwfDB8fHww",
          likes: 350,
          postedDate: "2024-09-15"
        },
        {
          id: 2,
          caption: "Chasing waterfalls.",
          image: "https://images.unsplash.com/photo-1671773601128-2c5fc9d2b6e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGVyZmFsbHN8ZW58MHwwfDB8fHww",
          likes: 420,
          postedDate: "2024-09-10"
        },
        {
          id: 3,
          caption: "Exploring the hidden forests.",
          image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8MHwwfHx8MA%3D%3D",
          likes: 510,
          postedDate: "2024-08-29"
        },
        {
          id: 4,
          caption: "Captured this incredible wildlife moment!",
          image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lsZGxpZmV8ZW58MHwwfDB8fHww",
          likes: 680,
          postedDate: "2024-08-20"
        },
        {
          id: 5,
          caption: "A misty morning by the lake.",
          image: "https://images.unsplash.com/photo-1441150113536-20932cd8b7f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pc3QlMjBsYWtlfGVufDB8MHwwfHx8MA%3D%3D",
          likes: 320,
          postedDate: "2024-08-12"
        },
        {
          id: 6,
          caption: "Sunset vibes from my recent trip.",
          image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8MHwwfHx8MA%3D%3D",
          likes: 430,
          postedDate: "2024-07-25"
        }
      ]
    },
    {
      name: "Emily Smith",
      username: "emily_smith",
      image:
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnMlMjBwcm9maWxlfGVufDB8MHwwfHx8MA%3D%3D",
      followers: 2300,
      following: 420,
      career: "Travel Blogger",
      description: "Exploring hidden gems around the world and sharing my travel experiences.",
      posts: [
        {
          id: 7,
          caption: "Adventures in the Sahara desert.",
          image: "https://images.unsplash.com/photo-1523044883946-4b4ad5c9bf45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FoYXJhJTIwZGVzZXJ0fGVufDB8MHwwfHx8MA%3D%3D",
          likes: 520,
          postedDate: "2024-09-14"
        },
        {
          id: 8,
          caption: "A quaint village in the Alps.",
          image: "https://images.unsplash.com/photo-1609776286098-86b0ed4a16d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxwc3xlbnwwfDB8MHx8fDA%3D",
          likes: 610,
          postedDate: "2024-09-08"
        },
        {
          id: 9,
          caption: "Exploring the streets of Paris.",
          image: "https://images.unsplash.com/photo-1622026450231-aeea3f64c4d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjBzdHJlZXR8ZW58MHwwfDB8fHww",
          likes: 890,
          postedDate: "2024-08-25"
        },
        {
          id: 10,
          caption: "The beauty of the Amalfi Coast.",
          image: "https://images.unsplash.com/photo-1578508462038-6582882a33c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hbGZpJTIwY29zdHxlbnwwfDB8MHx8fDA%3D",
          likes: 460,
          postedDate: "2024-08-16"
        },
        {
          id: 11,
          caption: "Hiking through the Grand Canyon.",
          image: "https://images.unsplash.com/photo-1543266502-7a301a17e75e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbmQlMjBhY255b258ZW58MHwwfDB8fHww",
          likes: 730,
          postedDate: "2024-08-04"
        },
        {
          id: 12,
          caption: "Trekking in the Himalayas!",
          image: "https://plus.unsplash.com/premium_photo-1661814278311-d59ab0b4a676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGltYWxheWFzfGVufDB8MHwwfHx8MA%3D%3D",
          likes: 820,
          postedDate: "2024-07-22"
        }
      ]
    },
    {
      name: "Michael Johnson",
      username: "mike_johnson",
      image:
        "https://images.unsplash.com/photo-1524952249965-023a2a31663d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      followers: 8500,
      following: 950,
      career: "Fitness Coach",
      description: "Helping people transform their lives through fitness and healthy living.",
      posts: [
        {
          id: 13,
          caption: "Morning workout grind!",
          image: "https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
          likes: 970,
          postedDate: "2024-09-13"
        },
        {
          id: 14,
          caption: "Post-workout protein shake recipe.",
          image: "https://plus.unsplash.com/premium_photo-1661582247705-a7ac30acd485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvc3QlMjB3b3Jrb3V0JTIwcHJvdGllbiUyMHNoYWtlfGVufDB8MHwwfHx8MA%3D%3D",
          likes: 1020,
          postedDate: "2024-09-05"
        },
        {
          id: 15,
          caption: "Leg day is the best day.",
          image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnJTIwZGF5fGVufDB8MHwwfHx8MA%3D%3D",
          likes: 890,
          postedDate: "2024-08-30"
        },
        {
          id: 16,
          caption: "No excuses. Get it done!",
          image: "https://images.unsplash.com/photo-1583791031153-d55e79f7f115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Tm8lMjBleGN1c2VzLiUyMEdldCUyMGl0JTIwZG9uZSF8ZW58MHwwfDB8fHww",
          likes: 1140,
          postedDate: "2024-08-14"
        },
        {
          id: 17,
          caption: "Healthy meal prep for the week.",
          image: "https://images.unsplash.com/photo-1622485831722-afd3d6a3d3ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoeSUyMG1lYWwlM0J8ZW58MHwwfDB8fHww",
          likes: 780,
          postedDate: "2024-08-02"
        },
        {
          id: 18,
          caption: "Stretching before a good run.",
          image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJ1bnxlbnwwfDB8MHx8fDA%3D",
          likes: 650,
          postedDate: "2024-07-21"
        }
      ]
    },
    {
      name: "Sarah Lee",
      username: "sarah_lee",
      image:
        "https://images.unsplash.com/photo-1521341957697-b93449760f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzJTIwcHJvZmlsZXxlbnwwfDB8MHx8fDA%3D",
      followers: 5400,
      following: 1200,
      career: "Fashion Designer",
      description: "Creating bold and unique fashion styles for modern trends.",
      posts: [
        {
          id: 19,
          caption: "New collection inspired by nature.",
          image: "https://images.unsplash.com/photo-1714561790850-85d8b6ee9ba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXRyZXxlbnwwfDB8MHx8fDA%3D",
          likes: 690,
          postedDate: "2024-09-12"
        },
        {
          id: 20,
          caption: "Behind the scenes of my latest photoshoot.",
          image: "https://plus.unsplash.com/premium_photo-1682097066897-209d0d9e9ae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9zaG9vdHxlbnwwfDB8MHx8fDA%3D",
          likes: 810,
          postedDate: "2024-09-03"
        },
        {
          id: 21,
          caption: "Bold colors and sleek designs.",
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJvbGQlMjBjb2xvcnMlMjBhbmQlMjBzbGVlayUyMGRlc2lnbnxlbnwwfDB8MHx8fDA%3D",
          likes: 950,
          postedDate: "2024-08-22"
        },
        {
          id: 22,
          caption: "Exploring vintage fashion trends.",
          image: "https://images.unsplash.com/photo-1471119017026-179f1bb0a70e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmludGFnZSUyMGZhc2hpb24lMjBtZW58ZW58MHwwfDB8fHww",
          likes: 780,
          postedDate: "2024-08-08"
        },
        {
          id: 23,
          caption: "Statement pieces from my new collection.",
          image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5ldyUyMGNvbGxlY3Rpb21uJTIwc3RtdCUyMHBpZWNlc3xlbnwwfDB8MHx8fDA%3D",
          likes: 730,
          postedDate: "2024-07-28"
        },
        {
          id: 24,
          caption: "Fabrics that tell a story.",
          image: "https://images.unsplash.com/photo-1540292370723-60cf448886c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFicmljc3xlbnwwfDB8MHx8fDA%3D",
          likes: 860,
          postedDate: "2024-07-16"
        }
      ]
    },
    {
      name: "David Kim",
      username: "david_kim",
      image:
        "https://images.unsplash.com/photo-1633090900369-6c01c3f1df99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXJzJTIwcHJvZmlsZXxlbnwwfDB8MHx8fDA%3D",
      followers: 3900,
      following: 600,
      career: "Software Engineer",
      description: "Coding enthusiast and tech geek, sharing insights on software development.",
      posts: [
        {
          id: 25,
          caption: "Debugging in the late hours.",
          image: "https://images.unsplash.com/photo-1450897918656-527057db59d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGF0ZSUyMGhvdXJzfGVufDB8MHwwfHx8MA%3D%3D",
          likes: 430,
          postedDate: "2024-09-11"
        },
        {
          id: 26,
          caption: "My first React project!",
          image: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBwcm9qZWN0c3xlbnwwfDB8MHx8fDA%3D",
          likes: 520,
          postedDate: "2024-09-02"
        },
        {
          id: 27,
          caption: "Building a dynamic website from scratch.",
          image: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBwcm9qZWN0c3xlbnwwfDB8MHx8fDA%3D",
          likes: 760,
          postedDate: "2024-08-18"
        },
        {
          id: 28,
          caption: "Mastering backend development.",
          image: "https://images.unsplash.com/photo-1613068687893-5e85b4638b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFja2VuZCUyMGRldmVsb3BtZW50fGVufDB8MHwwfHx8MA%3D%3D",
          likes: 620,
          postedDate: "2024-08-10"
        },
        {
          id: 29,
          caption: "Getting into AI and machine learning.",
          image: "https://images.unsplash.com/photo-1503039153293-d4d2ba067754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8MHwwfHx8MA%3D%3D",
          likes: 710,
          postedDate: "2024-07-27"
        },
        {
          id: 30,
          caption: "Exploring open-source contributions.",
          image: "https://images.unsplash.com/photo-1463694023725-91c761715d21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXhwbG9yaW5nJTIwb3BlbiUyMHNvdXJjZSUyMGNvbnRyaWJ1dGlvbnMufGVufDB8MHwwfHx8MA%3D%3D",
          likes: 830,
          postedDate: "2024-07-14"
        }
      ]
    },
    {
      name: "Olivia Brown",
      username: "olivia_brown",
      image:
        "https://images.unsplash.com/photo-1589302701986-b539f78cae26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVzZXJzJTIwcHJvZmlsZXxlbnwwfDB8MHx8fDA%3D",
      followers: 7200,
      following: 300,
      career: "Digital Artist",
      description: "Digital creations blending fantasy and reality, one artwork at a time.",
      posts: [
        {
          id: 31,
          caption: "Bringing my latest fantasy piece to life.",
          image: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVpY2UlMjBvZiUyMGxpZmV8ZW58MHwwfDB8fHww",
          likes: 930,
          postedDate: "2024-09-10"
        },
        {
          id: 32,
          caption: "Exploring 3D digital art.",
          image: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVpY2UlMjBvZiUyMGxpZmV8ZW58MHwwfDB8fHww",
          likes: 860,
          postedDate: "2024-09-01"
        },
        {
          id: 33,
          caption: "Blending reality with imagination.",
          image: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVpY2UlMjBvZiUyMGxpZmV8ZW58MHwwfDB8fHww",
          likes: 790,
          postedDate: "2024-08-19"
        },
        {
          id: 34,
          caption: "Illustrating futuristic landscapes.",
          image: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVpY2UlMjBvZiUyMGxpZmV8ZW58MHwwfDB8fHww",
          likes: 620,
          postedDate: "2024-08-06"
        },
        {
          id: 35,
          caption: "Art inspired by my dreams.",
          image: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVpY2UlMjBvZiUyMGxpZmV8ZW58MHwwfDB8fHww",
          likes: 710,
          postedDate: "2024-07-31"
        },
        {
          id: 36,
          caption: "Combining vibrant colors in my latest work.",
          image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tYmluYXRpb24lMjBvZiUyMHZpYnJhbnQlMjBjb2xvcnN8ZW58MHwwfDB8fHww",
          likes: 780,
          postedDate: "2024-07-18"
        }
      ]
    }
  ];
  
  export default Users;
  