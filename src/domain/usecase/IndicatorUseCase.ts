
import { IndicatorGateway } from '../../data/gateway/IndicatorGateway';

export default class IndicatorUseCase {
    constructor(private readonly indicatorGateway: IndicatorGateway) {}

    public async getUfValue(date: string) : Promise<string>{
        const response = this.indicatorGateway.getUF(date);
        return response;
    }
}