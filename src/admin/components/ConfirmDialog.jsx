function ConfirmDialog({

    title,
    message,
    onConfirm,
    onCancel,

}) {

    return (

        <div style={{

            position: "fixed",

            top: 0,

            left: 0,

            width: "100%",

            height: "100%",

            background: "rgba(0,0,0,0.5)",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            zIndex: 9999,

        }}>

            <div style={{

                background: "#ffffff",

                padding: "30px",

                borderRadius: "12px",

                width: "400px",

                textAlign: "center",

            }}>

                <h2>
                    ⚠ {title}
                </h2>

                <p style={{

                    marginTop: "15px",

                    color: "#555",

                }}>

                    {message}

                </p>

                <div style={{

                    marginTop: "25px",

                    display: "flex",

                    gap: "15px",

                    justifyContent: "center",

                }}>

                    <button
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                    >
                        Continue
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ConfirmDialog;