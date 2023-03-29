import { useState } from 'react';
import DecryptedForm from './DecryptedForm';

const EncryptForm = () => {
    const [encrypted, setEncrypted] = useState();
    const [decrypted, setDecrypted] = useState();
    const [onEncryption, setOnEncryption] = useState(false);

    const decrypt = () => {
        const [firstName, lastName, id] = encrypted.split(/[0]+/);
        setDecrypted({firstName, lastName, id});
        setOnEncryption(false)
    };
    const handleChange = (e) => {
        setOnEncryption(true)
        setEncrypted(e.target.value)
    };

    return (
        <div className="container d-flex justify-content-center py-5">
            <div className="row gy-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            Hi!, Im Fernando Acevedo and this is my test
                        </div>
                        <div className="card-body">
                            <div className="form-floating mb-3">
                                <input
                                    onChange={handleChange}
                                    id="floatingInput"
                                    value={encrypted}
                                    type="text"
                                    className="form-control"
                                    placeholder='Add your encrypted string'
                                />
                                <label for="floatingInput">Add your encrypted string</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-primary"
                                    onClick={decrypt}
                                    disabled={!encrypted}
                                >
                                    Decrypt
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    { 
                        decrypted && !onEncryption &&
                        <DecryptedForm decrypted={decrypted} />
                    }
                </div>
            </div>
        </div>
    )
}

export default EncryptForm;
