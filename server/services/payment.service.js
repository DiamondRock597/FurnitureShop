import { PaymentModel } from '../models/payment.model.js';

class PaymentService {
    getList = async (userId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        return PaymentModel.find({ userId });
    }

    createPaymentMethod = (userId, input) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        return PaymentModel.create({ userId, input });
    }
}

export const paymentService = new PaymentService();