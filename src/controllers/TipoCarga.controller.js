import TipoCarga from '../models/TipoCarga'

export async function getTipoCarga(req, res) {
    try {
        const tipoCarga = await TipoCarga.findAll();
        res.status(200).json({ data: tipoCarga });
    } catch (error) {
        res.status(500).send({ data: error });
    }
}