import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession(@Body() paymentSession:PaymentSessionDto){
    return this.paymentsService.createPaymentSession(paymentSession);
  }

  @Get('success')
  success(){
    return{
      ok: true,
      message: 'Payment successful'
    }
  }

  @Get('cancelled')
  cancelled(){
    return{
      ok: false,
      message: 'Payment cancelled'
    }
  }

  @Post('webhook')
  async stripeWebhook(){
    return 'Stripe Webhook';
  }

}
