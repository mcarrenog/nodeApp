import axios from "axios";
import { dbRepositoriesFactory } from "nodeapprepositories";
import moment from "moment";
import { logger } from '../../shared/ConfigLog';

export class IndicatorGateway {


  public async getUF(date: string): Promise<string> {
    const url = await dbRepositoriesFactory.getValueByKey("indicador");

    const dateAux = moment(new Date(date)).format( "DD-MM-YYYY");

    const queryString = `${url[0]!.value!}/uf/${dateAux}`;

    const response = await axios.get(queryString);
    const { nombre, unidad_medida, serie } = response.data;
    const { fecha, valor } = serie[0];

    const result = `nombre: ${nombre} | unidad de medida: ${unidad_medida} | fecha: ${fecha} | valor: ${valor}`;
    logger.info(result);

    return result;
  }
}
