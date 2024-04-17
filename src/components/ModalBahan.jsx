const initialState = {
    id: "",
  nama: "",
  BK: 0,
  PK: 0,
  LK: 0,
  Abu: 0,
  Ca: 0,
  P: 0,
  NDF: 0,
  TDN: 0,
  }
export default function ModalBahan({data=initialState}) {
  return (
    <>
      <div
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal${data.id}`}
      >
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  </svg>
      </div>
      

      <div
        className="modal fade"
        id={`exampleModal${data.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {data.nama}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>BK</th>
                            <th>PK</th>
                            <th>LK</th>
                            <th>Abu</th>
                            <th>Ca</th>
                            <th>P</th>
                            <th>TDN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.BK}</td>
                            <td>{data.PK}</td>
                            <td>{data.LK}</td>
                            <td>{data.Abu}</td>
                            <td>{data.Ca}</td>
                            <td>{data.P}</td>
                            <td>{data.TDN}</td>
                        </tr>
                    </tbody>
                </table>
                <span className="fst-italic">* BK = berat kering <br />PK = protein kasar <br />LK = Lemak Kasar <br />Abu = kadar mineral total <br />Ca = kalsium <br />P = fosfor <br />TDN = total energi</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
