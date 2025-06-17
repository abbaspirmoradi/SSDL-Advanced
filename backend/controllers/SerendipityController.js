const AISerendipity = require('../models/AISerendipityModel'); // Adjust the path as needed
const HCISerendipity = require('../models/HCISerendipityModel'); // Adjust the path as needed
const PPCSerendipity = require('../models/PPCSerendipityModel'); // Adjust the path as needed
const WIOTSerendipity = require('../models/WIOTSerendipityModel'); // Adjust the path as needed
const { HCIData } = require('../data/HCIserendipityDocs');
const { AIData } = require('../data/AIserendipityDocs');
const { PPCData } = require('../data/PPCseredipityDocs');
const { WIOTData } = require('../data/WIOTseredipityDocs');



// http://localhost:5001/api/serendipities/AISerendipitySave
const insertAISerendipity = async (req, res) => {
    try {
        let result;
        if (Array.isArray(AIData)) {
            // Bulk insert if data is an array of objects
            result = await AISerendipity.insertMany(AIData);
        } else {
            // Create a single document if data is a single object
            result = await AISerendipity.create(AIdata);
        }

        res.status(201).json({
            message: 'Documents saved successfully',
            data: result
        });
    } catch (error) {
        console.error('Error saving AISerendipity documents:', error);
        res.status(500).json({
            error: 'Failed to save document(s)',
            details: error.message
        });
    }
};

//http://localhost:5001/api/serendipities/HCISerendipitySave
const insertHCISerendipity = async (req, res) => {
    try {
        let result;
        if (Array.isArray(HCIData)) {
            // Bulk insert if data is an array of objects
            result = await HCISerendipity.insertMany(HCIData);
        } else {
            // Create a single document if data is a single object
            result = await HCISerendipity.create(HCIdata);
        }

        res.status(201).json({
            message: 'Documents saved successfully',
            data: result
        });
    } catch (error) {
        console.error('Error saving AISerendipity documents:', error);
        res.status(500).json({
            error: 'Failed to save document(s)',
            details: error.message
        });
    }
};

//http://localhost:5001/api/serendipities/PPCSerendipitySave
const insertPCCSerendipity = async (req, res) => {
    try {
        let result;
        if (Array.isArray(PPCData)) {
            // Bulk insert if data is an array of objects
            result = await PPCSerendipity.insertMany(PPCData);
        } else {
            // Create a single document if data is a single object
            result = await PPCSerendipity.create(PPCData);
        }

        res.status(201).json({
            message: 'Documents saved successfully',
            data: result
        });
    } catch (error) {
        console.error('Error saving PPCSerendipity documents:', error);
        res.status(500).json({
            error: 'Failed to save document(s)',
            details: error.message
        });
    }
};

//http://localhost:5001/api/serendipities/PPCSerendipitySave
const insertWIOTSerendipity = async (req, res) => {
    try {
        let result;
        if (Array.isArray(PPCData)) {
            // Bulk insert if data is an array of objects
            result = await WIOTSerendipity.insertMany(WIOTData);
        } else {
            // Create a single document if data is a single object
            result = await WIOTSerendipity.create(WIOTData);
        }

        res.status(201).json({
            message: 'Documents saved successfully',
            data: result
        });
    } catch (error) {
        console.error('Error saving WIOTSerendipity documents:', error);
        res.status(500).json({
            error: 'Failed to save document(s)',
            details: error.message
        });
    }
};

const getAISerendipity = async (req, res) => {
    // Get offset from the query string. For example: ?offset=0
    const { offset } = req.query;
    const offsetValue = parseInt(offset, 10) || 0;
    // Compute the index as one document per 10 offset units.
    const index = Math.floor(offsetValue / 10);

    try {
        // Retrieve one document by skipping the computed number of documents.
        const docs = await AISerendipity.find({})
            .skip(index)
            .limit(1);

        if (!docs || docs.length === 0) {
            return res.status(404).json({ error: 'No serendipity doc found' });
        }

        // Get the document at the computed index.
        const doc = docs[0];

        // Return the document without updating any count.
        res.status(200).json(doc);
    } catch (error) {
        console.error('Error retrieving serendipity doc:', error);
        res.status(500).json({ error: error.message });
    }
};

const getHCISerendipity = async (req, res) => {
    // Get offset from the query string. For example: ?offset=0
    const { offset } = req.query;
    const offsetValue = parseInt(offset, 10) || 0;
    // Compute the index as one document per 10 offset units.
    const index = Math.floor(offsetValue / 10);

    try {
        // Retrieve one document by skipping the computed number of documents.
        const docs = await HCISerendipity.find({})
            .skip(index)
            .limit(1);

        if (!docs || docs.length === 0) {
            return res.status(404).json({ error: 'No serendipity doc found' });
        }

        // Get the document at the computed index.
        const doc = docs[0];

        // Return the document without updating any count.
        res.status(200).json(doc);
    } catch (error) {
        console.error('Error retrieving serendipity doc:', error);
        res.status(500).json({ error: error.message });
    }
};


const getWIOTSerendipity = async (req, res) => {
    // Get offset from the query string. For example: ?offset=0
    const { offset } = req.query;
    const offsetValue = parseInt(offset, 10) || 0;
    // Compute the index as one document per 10 offset units.
    const index = Math.floor(offsetValue / 10);

    try {
        // Retrieve one document by skipping the computed number of documents.
        const docs = await WIOTSerendipity.find({})
            .skip(index)
            .limit(1);

        if (!docs || docs.length === 0) {
            return res.status(404).json({ error: 'No serendipity doc found' });
        }

        // Get the document at the computed index.
        const doc = docs[0];

        // Return the document without updating any count.
        res.status(200).json(doc);
    } catch (error) {
        console.error('Error retrieving serendipity doc:', error);
        res.status(500).json({ error: error.message });
    }
};


const getPPCSerendipity = async (req, res) => {
    // Get offset from the query string. For example: ?offset=0
    const { offset } = req.query;
    const offsetValue = parseInt(offset, 10) || 0;
    // Compute the index as one document per 10 offset units.
    const index = Math.floor(offsetValue / 10);

    try {
        // Retrieve one document by skipping the computed number of documents.
        const docs = await PPCSerendipity.find({})
            .skip(index)
            .limit(1);

        if (!docs || docs.length === 0) {
            return res.status(404).json({ error: 'No serendipity doc found' });
        }

        // Get the document at the computed index.
        const doc = docs[0];

        // Return the document without updating any count.
        res.status(200).json(doc);
    } catch (error) {
        console.error('Error retrieving serendipity doc:', error);
        res.status(500).json({ error: error.message });
    }
};


const getSerendipityById = async (req, res) => {
    const { id } = req.params;

    try {
        // Try finding in both collections (AI and HCI) if you're not sure which it came from
        let doc = await AISerendipity.findById(id);
        if (!doc) {
            doc = await HCISerendipity.findById(id);
        }

        if (!doc) {
            return res.status(404).json({ error: 'Serendipity document not found' });
        }

        res.status(200).json(doc);
    } catch (error) {
        console.error('Error retrieving serendipity doc by ID:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    insertAISerendipity,
    insertHCISerendipity,
    insertPCCSerendipity,
    insertWIOTSerendipity,
    getAISerendipity,
    getHCISerendipity,
    getSerendipityById,
    getPPCSerendipity,
    getWIOTSerendipity
}