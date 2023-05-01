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
        return PaymentDto.parse(payment);
    }

    togglePayment = (paymentId) => PaymentModel.findByIdAndUpdate(paymentId, { isActive: true });
}

export const paymentService = new PaymentService();