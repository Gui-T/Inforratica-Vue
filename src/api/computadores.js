import axios from 'axios';
export default class ComputadoresApi {
  async buscarTodosOsComputadores() {
    const { data } = await axios.get('/computadores/');
    return data;
  }
  async adicionarComputador(computador) {
    const { data } = await axios.post('/computadores/', computador);
    return data;
  }
  async atualizarComputador(computador) {
    const { data } = await axios.put(`/computadores/${computador.id}/`, computador);
    return data;
  }
  async excluirComputador(id) {
    const { data } = await axios.delete(`/computadores/${id}/`);
    return data;
  }
}
