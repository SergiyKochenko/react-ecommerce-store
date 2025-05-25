import express from 'express';
import { adminRoute, protectRoute } from '../middleware/auth.middleware.js';
import { getAnalyticsData, getDailySalesData } from '../controllers/analytics.controller.js';

const router = express.Router();

router.get("/", protectRoute, adminRoute, async (req, res) => {
    try {
        const analyticsData = await getAnalyticsData();

        const endData = new Date();
        const startData = new Date(endData.getTime() - 7 * 24 * 60 * 60 * 1000); // Last 7 days
        const dailySalesData = await getDailySalesData(startData, endData);

        res.json({
            analyticsData,
            dailySalesData,
        })
    } catch (error) {
        console.log("Error in analytics route:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
        
    }
});

export default router;