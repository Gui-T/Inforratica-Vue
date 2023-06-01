import axios from 'axios';
export default class ComputadoresApi {
  async buscarTodosOsComputadores() {
    const { data } = await axios.get('http://192.168.1.14:19003/computadores');
    return data;
  }
  async adicionarComputador(computador) {
    const { data } = await axios.post('http://192.168.1.14:19003/computadores', computador);
    return data;
  }
  async atualizarComputador(computador) {
    const { data } = await axios.put(`http://192.168.1.14:19003/computadores/${computador.id}/`, computador);
    return data;
  }
  async excluirComputador(id) {
    const { data } = await axios.delete(`http://192.168.1.14:19003/computadores/${id}/`);
    return data;
  }
}
