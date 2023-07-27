const ListBlog = [
  {
    img: "/img/blogs/dashui.png",
    tags: (
      <>
        <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-600">
          Dashboard
        </span>
        <span class="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-600">
          Sample
        </span>
      </>
    ),
    title: "DashUI Admin Dashboard",
    link: "https://dashui-dashboard-sample.vercel.app/",
  },
  {
    img: "/img/blogs/windmill.png",
    tags: (
      <>
        <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-600">
          Dashboard
        </span>
        <span class="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-600">
          Sample
        </span>
      </>
    ),
    title: "Windmill Dashboard",
    link: "https://windmill-dashboard-sample.vercel.app/",
  },
  {
    img: "/img/blogs/bookworm.png",
    tags: (
      <>
        <span class="px-3 py-1 text-sm rounded-full bg-fuchsia-100 text-fuchsia-600">
          Landing page
        </span>
        <span class="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-600">
          Sample
        </span>
      </>
    ),
    title: "Bookworm theme",
    link: "https://bookworm-theme.vercel.app/",
  },
  {
    img: "/img/blogs/bigspring.png",
    tags: (
      <>
        <span class="px-3 py-1 text-sm rounded-full bg-fuchsia-100 text-fuchsia-600">
          Landing page
        </span>
        <span class="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-600">
          Sample
        </span>
      </>
    ),
    title: "Bigspring theme",
    link: "https://bigspring-theme.vercel.app/",
  },
  {
    img: "/img/blogs/andromeda.png",
    tags: (
      <>
        <span class="px-3 py-1 text-sm rounded-full bg-fuchsia-100 text-fuchsia-600">
          Lading page
        </span>
        <span class="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-600">
          Sample
        </span>
      </>
    ),
    title: "Andromeda theme",
    link: "https://andromeda-theme.vercel.app/",
  },
];

const BlogItem = ({ img, tags, title, link }) => {
  return (
    <>
      <div class="w-full overflow-hidden rounded-sm aspect-w-16 aspect-h-9">
        <img class="object-cover" src={img} alt="image" />
      </div>
      <div class="flex flex-col justify-center">
        <div class="flex mt-5 space-x-3">{tags}</div>
        <h3 class="mt-5 text-2xl font-bold">{title}</h3>
        <p class="mt-3 text-gray-500">
          <a href={link} target="_blank">
            Click here to view demo
          </a>
        </p>
        {/* <div class="flex mt-5 space-x-3">
          <div class="flex-shrink-0">
            <img
              class="object-cover w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"
              alt="image"
            />
          </div>
          <div class="flex flex-col">
            <span class="font-medium">Ronald Matthews</span>
            <span class="text-gray-500">Oct 14, 2021 • 6 min read</span>
          </div>
        </div> */}
      </div>
    </>
  );
};

const BlogList = () => {
  return (
    <div>
      <div class="container flex flex-col justify-center px-6 py-6 mx-auto sm:py-12">
        <div class="grid gap-10 lg:grid-cols-2">
          <BlogItem {...ListBlog[0]} />
        </div>
        <h2 class="mt-10 text-3xl">Other samples</h2>
        <div class="grid mt-5 lg:grid-cols-3 gap-y-14 lg:gap-10">
          {ListBlog.filter((item,index) => index > 0).map((item) => (
            <div>
                <BlogItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
