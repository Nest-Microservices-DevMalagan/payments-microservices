import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';
import { Request, Response } from 'express';

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
  async stripeWebhook(@Req() req: Request, @Res() res: Response){
    return this.paymentsService.stripeWebhook(req, res);
  }

}
