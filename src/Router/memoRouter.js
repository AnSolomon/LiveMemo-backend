import express from "express";

import { createMemo,
    deleteMemo,
    saveMemo,
    showMemos,
    addBookmark,
    removeBookmark,
    viewMemo,
    checkBookmark
 } from "../Controller/memoController";

import { isLoggedin } from "../Services/AuthService";

const router = express.Router();

router.post("/createMemo", isLoggedin, createMemo);
router.post("/delete", isLoggedin, deleteMemo);
router.post("/save", isLoggedin, saveMemo);
router.post("/addbookmark", isLoggedin, addBookmark);
router.post("/removebookmark", isLoggedin, removeBookmark);

// router.get("/getMemos", showMemos); // main에 메모리스트 전체 뜨는 것
router.get("/getMemos", isLoggedin, showMemos); // main에 메모리스트 전체 뜨는 것
router.get("/getMemo/:id", isLoggedin, viewMemo); // 하나의 메모 조회

// router.post("/create", isLoggedin, createMemo);
// router.post("/delete", isLoggedin, deleteMemo);
// router.post("/save", isLoggedin, saveMemo);
// router.get("/show", isLoggedin, showMemo);


export default router;