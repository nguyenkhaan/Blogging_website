import { mysqlPrisma } from "../../config/prisma.config.mts";
async function createData(blog: any) {
    return await mysqlPrisma.blogs.create({
        data: {
            blogID: blog.blogID,
            title: blog.title,
            content: blog.content,
            score: blog.score,
            views: blog.views,
            banner: blog.banner,
            userID: blog.userID,
            watchs: 0,
            createdAt: new Date(Date.now()).toISOString(),
            updatedAt: new Date(Date.now()).toISOString(),
        },
    });
}
async function deleteData() {}
async function updateData() {}
async function getData(id: string) {
    const res = await mysqlPrisma.blogs.findFirst({
        where: {
            blogID: id,
        },
        select: {
            banner: true,
            content: true,
            title: true,
        },
    });
    return res;
}
async function getDataForHome(page: number) {
    const res = await mysqlPrisma.blogs.findMany({
        skip: 20 * page,
        take: 20,
        select: {
            blogID: true,
            title: true,
            content: true,
            createdAt: true,
            author: {
                select: { name: true , avatar: true , userID: true},
            },
            views: true, 
            score: true 
        },
    });
    for (let i = 0; i < res.length; ++i) res[i].content = res[i].content.slice(0, 300) 
    return res;
}
export { createData, getData, getDataForHome };
