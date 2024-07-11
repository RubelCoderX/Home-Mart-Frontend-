const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Hiking",
      content:
        "Hiking is a great way to explore nature and stay fit. Whether you're a beginner or an experienced hiker, there's always something new to discover on the trails.",
      image:
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image URL
      date: "2024-07-11", // Example date
    },
    {
      id: 2,
      title: "Tips for Camping in the Wild",
      content:
        "Camping in the wilderness can be both exciting and challenging. Learn some essential tips for a safe and enjoyable camping experience.",
      image:
        "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlraW5nfGVufDB8fDB8fHww", // Example image URL
      date: "2024-07-10", // Example date
    },
    // {
    //   id: 3,
    //   title: "Best Outdoor Gear of the Year",
    //   content:
    //     "Explore our top picks for outdoor gear, including hiking boots, camping tents, and backpacks, to make your outdoor adventures unforgettable.",
    //   image: "https://via.placeholder.com/300", // Example image URL
    //   date: "2024-07-09", // Example date
    // },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold  mb-8 uppercase">
          news & events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover mb-4 rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
