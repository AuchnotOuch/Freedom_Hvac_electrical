// /controllers/serviceController.js
import Service from '../models/Service.js';

// Get all services
export async function getServices(req, res, next) {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        next(err);
    }
}

// Create a new service
export async function createService(req, res, next) {
    try {
        const newService = new Service(req.body);
        const service = await newService.save();
        res.status(201).json(service);
    } catch (err) {
        next(err);
    }
}

// Delete a service
export async function deleteService(req, res, next) {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: 'Service deleted' });
    } catch (err) {
        next(err);
    }
}
