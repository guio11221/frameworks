import axios from "axios";
const urlApi = "https://portal-noticias-ifms.herokuapp.com/apinoticias"

/**
 * @description Uma forma de fazer request com axios.
 * @returns {Promise<{data:[{id_noticia:number,titulo:string,noticia:string,data_criacao:Date,resumo:string,autor:string,data_noticia:Date}]}>}
 */
export async function requestAxios() {
  try {
    const data = await axios.get(urlApi);

    return data.data;
  } catch (error) {
    throw new Error("Error ao tentar consultar essa api ;-;");
  }
}

/**
 * @description Uma forma de fazer request com fetch.
 * @returns {Promise<{data:[{id_noticia:number,titulo:string,noticia:string,data_criacao:Date,resumo:string,autor:string,data_noticia:Date}]}>}
 */

export function requestFetch() {
  try {
    const data = fetch(urlApi);
    return data;
  } catch (error) {
    throw new Error("Error ao tentar consultar essa api ;-;");
  }
}

/**
 * 
 * @param {Date} data Informe a data que deseja formatat
 * @returns {void}
 */
export function formatarDataComHora(data) {
  const dataFormatada = new Date(data);
  const dia = dataFormatada.getDate().toString().padStart(2, '0');
  const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
  const ano = dataFormatada.getFullYear();
  const hora = dataFormatada.getHours().toString().padStart(2, '0');
  const minuto = dataFormatada.getMinutes().toString().padStart(2, '0');
  const segundo = dataFormatada.getSeconds().toString().padStart(2, '0');
  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
