const express = require('express');
const router = express.Router();
const {

    insertAISerendipity,
    insertHCISerendipity,
    getHCISerendipity,
    getAISerendipity,
    getSerendipityById,
    insertPCCSerendipity,
    insertWIOTSerendipity,
    getWIOTSerendipity,
    getPPCSerendipity
} = require('../controllers/SerendipityController');

router.get('/AISerendipitySave', insertAISerendipity);
router.get('/HCISerendipitySave', insertHCISerendipity);
router.get('/PCCSerendipitySave', insertPCCSerendipity);
router.get('/WIOTSerendipitySave', insertWIOTSerendipity);
router.get('/getHCISerendipity', getHCISerendipity);
router.get('/getAISerendipity', getAISerendipity);
router.get('/getWIOTSerendipity', getWIOTSerendipity);
router.get('/getPPCSerendipity', getPPCSerendipity);
router.get('/getSerendipityById/:id', getSerendipityById);


module.exports = router;