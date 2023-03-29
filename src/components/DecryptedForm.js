import {useState} from 'react';

const DecryptedForm = (props) => {
    const [decrypted] = useState(props.decrypted);

    return (
        <div className="card">
            <div className="card-header">
                Here!
            </div>
            <div className="card-body">
                <div className="g-4">
                    <table class="table table-borderless">
                        <thead>
                            <tr className="table-warning">
                                <th scope="col">Id</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{decrypted.id}</th>
                                <th scope="row">{decrypted.firstName}</th>
                                <th scope="row">{decrypted.lastName}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DecryptedForm;
