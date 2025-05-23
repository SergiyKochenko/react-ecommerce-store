import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import e from "express";

export const protectRoute = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(401).json({ message: "Unauthorized, no access token provided" });
        }

        try {
            const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
            const user = await User.findById(decoded.userId).select("-password");

            if (!user) {
                return res.status(401).json({ message: "User not found" });
        }

        req.user = user;

        next();
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Unauthrozed - Access token expired" });
            }
        }

    } catch (error) {
        console.log("Error in productRoute middleware", error.message);
        res.status(500).json({ message: "Unauthorized - invalid access token", error: error.message });
        
    }
}

export const adminRoute = (req, res, next) => {
    // Middleware logic to verify admin role
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ message: "Forbidden: Admins only" });
    }
};