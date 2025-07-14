// const asyncHandler = (fn) => async () => {
//     try {
//         await fn(req, res, next)
//     }
//     catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             status: "error",
//             message: error.message || "Internal Server Error",
//         });
//         next(error);
//     }
// };

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

export default asyncHandler;