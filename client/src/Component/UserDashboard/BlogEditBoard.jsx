//https://stackoverflow.com/questions/23210587/how-to-configure-a-replica-set-with-mongodb
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import TextEditorBox from "./TextEditorBox";
import { sendBlog } from "../../Feature/sendBlog";
import { callingToast } from "../../Service/callingToast";
import { activityRecord } from "../../Service/activityRecorded";
import { stampFromCurrentYear } from "../../Helper/stampFromCurrentYeat";
export default function BlogEditBoard() {
    const [bannerPreview, setBannerPreview] = useState(null);
    const [editorContent, setEditorContent] = useState("");
    const [editorRef, setEditorRef] = useState(null);
    const location = useLocation();

    // Cleanup function
    useEffect(() => {
        return () => {
            if (bannerPreview) {
                URL.revokeObjectURL(bannerPreview);
            }
        };
    }, [bannerPreview]);

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            banner: null,
            title: "",
            content: "",
        },
    });

    async function onSubmit(data) {
        const finalContent =
            editorRef && editorRef.getHTML
                ? editorRef.getHTML()
                : editorContent || "<p>No content</p>";

        const submissionData = {
            ...data,
            content: finalContent,
        };
        const id = new URLSearchParams(location.search).get("id");
        // console.log('Submitting blog post:', submissionData);  //Du lieu nhan duoc chinh la submissionData
        const res = await sendBlog(submissionData, id); //Gui du lieu ve server
        if (res.data.code < 0)
            callingToast({
                type: "error",
                message: "Lỗi đăng bài - Vui lòng thử lại sau",
            });
        else {
            //goi toast de bao hieu dang bai thanh cong 
            callingToast({ type: "success", message: "Đăng bài thành công" });
            //Ghi nhan hoat dong hom nay 
            const res = await activityRecord(id , stampFromCurrentYear(Date.now())) //Truyen userID va Date.now() vao 
            // console.log('>>> Check time stamp: ' , stampFromCurrentYear(Date.now())) 
            console.log('Dang bai ket qua: ' , res) 
        }
    }

    return (
        <section className="w-full h-full bg-white md:shadow-xl/30 rounded-[5px] p-10 flex flex-col items-center text-black gap-10">
            <h1 className="font-semibold text-3xl">Write your new post</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-8 items-center">
                <Controller
                    control={control}
                    name="banner"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <div className="w-full relative rounded-2xl border-4 border-dashed border-gray-300 flex justify-center items-center overflow-hidden h-70 sm:h-90  lg:h-100 cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    onChange(file);
                                    if (file) {
                                        setBannerPreview(
                                            URL.createObjectURL(file)
                                        );
                                    } else {
                                        setBannerPreview(null);
                                    }
                                }}
                                onBlur={onBlur}
                                ref={ref}
                            />
                            {bannerPreview ? (
                                <img
                                    src={bannerPreview}
                                    alt="Banner Preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-gray-400">
                                    <h3 className="text-xl font-medium mt-2">
                                        Click to add your banner
                                    </h3>
                                </div>
                            )}
                        </div>
                    )}
                />

                <input
                    {...register("title")}
                    placeholder="Your title"
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />

                {/* Text Editor Box */}
                <TextEditorBox
                    onContentChange={setEditorContent}
                    onEditorReady={setEditorRef}
                    initialContent="<p>Start writing your post...</p>"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    Publish Post
                </button>
            </form>
        </section>
    );
}
