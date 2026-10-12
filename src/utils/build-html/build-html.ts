// Types
import { BuildHtmlProps } from "./build-html.types";

// Constants
import { data } from "../../constants/constants";

// Utils
import { cpfFormatter } from "../cpf-formatter";
import { numberInWords } from "../number-in-words";

export const buildHtml = (htmlData: BuildHtmlProps) => {
    return `
        <!doctype html>
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <title>Contrato de locação</title>

                    <style>
                        @page {
                            size: A4;
                            margin: 12mm;
                        }

                        *,
                        body,
                        input,
                        button,
                        textarea,
                        span,
                        h1,
                        h2,
                        h3,
                        h4,
                        h5,
                        h6 {
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                            outline: 0;
                            border: 0;
                        }

                        :root {
                            --page-width: 170mm;
                            --text-color-base: #000000;
                            --text-color-highlight: #cf0e0e;
                            --small-gap: 4px;
                            --medium-gap: 8px;
                            --large-gap: 10px;
                            --default-font-family: sans-serif;
                            --default-font-size: 16px;
                            --headline-font-size: 24px;
                            --section-title-font-size: 18px;
                        }

                        body {
                            font-family: var(--default-font-family);
                            font-size: var(--default-font-size);
                            text-align: justify;
                        }

                        #container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                        }

                        .contentWrapper {
                            width: var(--page-width);
                            margin: 0 auto;
                        }

                        @media print {
                            body {
                                margin: 0;
                                padding: 0;
                            }

                            .contentWrapper {
                                width: var(--page-width);
                                max-width: var(--page-width);
                                padding: 0;
                                margin: 0 auto;
                            }
                        }

                        #header {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            padding-bottom: 10px;
                            border-bottom: 1px solid #000000;
                        }

                        .headline {
                            font-size: var(--headline-font-size);
                            font-weight: bold;
                            color: var(--text-color-base);
                        }

                        .landlordSectionWrapper {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                            width: 100%;
                            padding-top: 14px;
                            gap: var(--medium-gap);
                        }

                        section {
                            width: 100%;
                        }

                        section h3 {
                            font-size: var(--section-title-font-size);
                            font-weight: bold;
                            color: var(--text-color-base);
                        }

                        section h3.highlight {
                            color: var(--text-color-highlight);
                        }

                        .informationWrapper {
                            display: flex;
                            flex-direction: column;
                            gap: var(--small-gap);
                        }

                        .informationContent {
                            display: flex;
                            flex-direction: column;
                            gap: var(--small-gap);
                        }

                        .informationContent ol {
                            display: flex;
                            flex-direction: column;
                            gap: var(--small-gap);
                            padding-left: 16px;
                        }

                        .signaturesWrapper {
                            display: flex;
                            flex-direction: column;
                            gap: 24px;
                            width: 100%;
                        }

                        .signaturesInputWrapper {
                            display: flex;
                            gap: 40px;
                            width: 100%;
                        }

                        .signatureInput {
                            flex: 1;
                            min-width: 0;
                            display: flex;
                            flex-direction: column;
                            border-top: 1px solid var(--text-color-base);
                            padding-top: var(--small-gap);
                            gap: var(--small-gap);
                        }

                        .footer {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding-top: 30px;
                            width: 100%;
                            margin: 0 auto;
                        }
                    </style>
                </head>
                <body>
                    <main id="container">
                        <div class="contentWrapper">
                            <section id="header">
                                <h1 class="headline">Contrato de locação de imóvel</h1>
                            </section>

                            <section class="landlordSectionWrapper">
                                <section>
                                    <div class="informationWrapper">
                                        <h3>Locador</h3>

                                        <div class="informationContent">
                                            <p>Nome: ${data.locator.name}</p>

                                            <p>CPF: ${cpfFormatter(data.locator.cpf)}</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="informationWrapper">
                                        <h3>Locatário</h3>

                                        <div class="informationContent">
                                            <p>Nome: ${htmlData.tenantName}</p>

                                            <p>CPF: ${cpfFormatter(htmlData.tenantCpf)}</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="informationWrapper">
                                        <h3>Imóvel objeto da locação</h3>

                                        <div class="informationContent">
                                            <p>
                                                Endereço: ${data.property.address}
                                            </p>

                                            <p>Tipo de imóvel: ${data.property.type}</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="informationWrapper">
                                        <h3>Valor e da data de vencimento do aluguel</h3>

                                        <div class="informationContent">
                                            <p>
                                                ${htmlData.rentalPrice} a serem quitados no dia ${htmlData.expirationDate} (${numberInWords(htmlData.expirationDate)}) de cada
                                                mês
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="informationWrapper">
                                        <h3>Reajuste do valor locatício</h3>

                                        <div class="informationContent">
                                            <p>
                                                O valor do aluguel será reajustado
                                                anualmente, de acordo com o percentual (%)
                                                de aumento aplicado ao salário mínimo
                                                vigente à época do reajuste, observadas as
                                                disposições legais aplicáveis.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="informationWrapper">
                                        <h3 class="highlight">
                                            Direitos e obrigações das partes
                                        </h3>

                                        <div class="informationContent">
                                            <ol>
                                                <li>
                                                    O locador compromete-se a entregar o
                                                    imóvel em condições de uso e
                                                    habitabilidade;
                                                </li>

                                                <li>
                                                    O Locatário deve utilizar o imóvel
                                                    exclusivamente para fins residenciais,
                                                    sendo proibida a sublocação ou
                                                    modificação do imóvel sem o
                                                    consentimento do Locador;
                                                </li>

                                                <li>
                                                    O Locatário é responsável por zelar e
                                                    manter o imóvel em boas condições;
                                                </li>

                                                <li>
                                                    As despesas referentes ao consumo de
                                                    água, energia elétrica, gás e outras
                                                    semelhantes serão de inteira
                                                    responsabilidade do locatário durante o
                                                    período de vigência do contrato;
                                                </li>

                                                <li>
                                                    Caso o locatário não manifeste interesse
                                                    na renovação do presente contrato,
                                                    deverá comunicar ao locador com
                                                    antecedência mínima de 30 (trinta) dias;
                                                </li>

                                                <li>
                                                    No momento da desocupação do imóvel, o
                                                    locatário compromete-se a devolvê-lo em
                                                    condições adequadas de limpeza e
                                                    pintura. Na hipótese de descumprimento
                                                    dessa obrigação, o locador será
                                                    indenizado pelo valor correspondente aos
                                                    serviços necessários para regularização
                                                    do imóvel. O locatário também responderá
                                                    por quaisquer danos ou avarias que sejam
                                                    constatados no imóvel durante o período
                                                    de vigência do contrato;
                                                </li>

                                                <li>
                                                    Em caso de atraso no pagamento do
                                                    aluguel, incidirá multa moratória
                                                    equivalente a 10% (dez por cento) sobre
                                                    o valor do débito em aberto, sem
                                                    prejuízo da atualização monetária, dos
                                                    juros de mora legais e demais encargos
                                                    previstos neste contrato e na legislação
                                                    aplicável.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="informationWrapper">
                                        <h3>Recisão contratual</h3>

                                        <div class="informationContent">
                                            <p>
                                                O presente contrato poderá ser rescindido
                                                por ambas as partes mediante aviso prévio de
                                                30 (trinta) dias, respeitando-se o pagamento
                                                proporcional dos valores até o término da
                                                ocupação do imóvel.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="signaturesWrapper">
                                        <h3>Assinaturas</h3>

                                        <div class="signaturesInputWrapper">
                                            <div class="signatureInput">
                                                <p>Locador</p>
                                                <p>${data.locator.name}</p>
                                            </div>

                                            <div class="signatureInput">
                                                <p>Locatário</p>
                                                <p>${htmlData.tenantName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>

                            <section class="footer">
                                <small>
                                    &copy; Todos os direitos reservados - 2026 | Guilherme
                                    Cordeiro
                                </small>
                            </section>
                        </div>
                    </main>
                </body>
            </html>

    `;
};
