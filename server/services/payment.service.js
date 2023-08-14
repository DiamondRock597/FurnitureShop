import { GraphQLError } from 'graphql';

import { PaymentDto } from '../dto/payment.dto.js';
import { PaymentModel } from '../models/payment.model.js';

class PaymentService {
    getList = async (userId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }
        const paymentList = await PaymentModel.find({ userId });
        return paymentList.map(PaymentDto.parse);
    }

    createPaymentMethod = async (userId, input) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        const payment = await PaymentModel.create({ userId, ...input });
        return payment._id;
    }

    updatePaymentMethod = async (id, input) => {
        const payment = await PaymentModel.findByIdAndUpdate(id, input, { new: true });
        return payment._id;
    }

    deletePaymentMethod = async (userId, id) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        await PaymentModel.findByIdAndDelete(id);

        return id;
    }
}

export const paymentService = new PaymentService();