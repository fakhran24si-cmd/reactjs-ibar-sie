import PageHeader from '../../components/PageHeader'
import Button from '../../components/Button'
import Badge from '../../components/Badge'
import Container from '../../components/Container'
import Avatar from '../../components/Avatar'
import Footer from '../../components/Footer'

export default function Components() {
  return (
    <Container className="bg-gray-100">
    <PageHeader title="Components" />
      <p>ini halaman components.</p>
      <div>
        <Button>simpan</Button>
        <Button type="danger">hapus</Button>
        <Button type="warning">peringatan</Button>  
              <Button type="secondary">batal</Button>

      </div>

      <div className="mb-3 flex gap-2">
        <Badge type="success">Berhasil</Badge>
        <Badge type="warning">kurang</Badge>
        <Badge type="danger">gagal</Badge>
        <Badge type="info">informasi</Badge>
      </div>

      <div className="mb-3 flex gap-2">
          <Avatar name="Budi"/>
          <Avatar name="Siti"/>        
      </div>

      <Container className="bg-gray-100">
  <h1 className="text-3xl font-bold mb-4">
    Daftar Produk
  </h1>

  <p className="text-gray-600">
    Berikut adalah daftar produk terbaru.
  </p>
</Container>

    </Container>
    
  );
}