import styles from "./component.module.css"

export default function Sponsors() {
    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>2025 Sponsors</h1>
            <div className={styles.sponsorCall}>
                <p>Interested in sponsoring QuHacks this year? <a href="mailto:info@quhacks.tech">Contact us!</a></p>
            </div>

            <div className={`${styles.tier} ${styles.gold}`}>
                <h1 className={styles.tiername}>Gold</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.issi-software.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/issi.png" />
                    </a>
                </div>
            </div>

            <div className={`${styles.tier} ${styles.silver}`}>
                <h1 className={styles.tiername}>Silver</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.wolfram.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/wolfram.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.mathworks.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/mathworks.png" />
                    </a>
                </div>
            </div>

            <div className={`${styles.tier} ${styles.bronze}`}>
                <h1 className={styles.tiername}>Bronze</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://1password.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/1password.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://artofproblemsolving.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/aops.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://codehs.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/codehs.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.desmos.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/desmos.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.interviewcake.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/interview_cake.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://gen.xyz/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/xyz.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.wegmans.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/wegmans.jpg" />
                    </a>
                </div>
            </div>

            <div className={`${styles.tier} ${styles.mediaPartner}`}>
                <h1 className={styles.tiername}>Media Partner</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://devitjobs.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/devitjobs.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}
