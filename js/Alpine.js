document.addEventListener('alpine:init', () => {
  Alpine.data('project', () => ({
    items: [{
      id: 1, name: "Timnas", img: "timnas.jpg", title: "First Project", url: "https://Timnas-indo.vercel.app"
    },
    {
      id: 2, name: "Perpustakaan", img: "perpus.jpg", title: "Second Project", url: "https://perpustakaan-sooty.vercel.app"
    },
    {
      id: 3, name: "Warung Makan", img: "warung.jpg", title: "Third Project", url:"https://warung-makan-alpha.vercel.app"
    },
    ]
  }));
});