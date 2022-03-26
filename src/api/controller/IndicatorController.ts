import { Get, Query, Response, Route, SuccessResponse, Tags } from 'tsoa';
import { ApiError } from '../model/ApiError';
import  IndicatorUseCase from '../../domain/usecase/IndicatorUseCase';


@Tags('IndicatorController')
@Route('Indicator')
export default class IndicatorController{
    constructor(private readonly indicatortUseCase: IndicatorUseCase) {}
    
    @Get('/')
    @Response<ApiError>(404, 'Not Found')
    @SuccessResponse('200', 'IndicatorResponse')
    public async getIndicator(@Query() date: string): Promise<string> {
      return await this.indicatortUseCase.getUfValue(date); 
    }
}