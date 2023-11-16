const genertaeHTML = (id, due_amount, due_date) => {
    return `<!DOCTYPE HTML>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;background-color: #fbfbfb;color: #000000">
    
      <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #fbfbfb;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f7f7f7;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
    
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px 20px;font-family:'Montserrat',sans-serif;"
                                  align="left">
    
                                  <h1 class="v-text-align"
                                    style="margin: 0px; color: #555555; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 20px; font-weight: 400;">
                                    Dear Customer,</h1>
                                </td>
                              </tr>
                            </tbody>
                          </table>
    
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 20px;font-family:'Montserrat',sans-serif;"
                                  align="left">
    
                                  <div class="v-text-align"
                                    style="font-size: 14px; color: #7e7b7b; line-height: 140%; text-align: left; word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;"><em><span
                                          style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;">This
                                          is a friendly payment reminder that your Invoice is now <strong>past
                                            due.</strong></span></em></p>
                                  </div>
    
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 20px 20px;font-family:'Montserrat',sans-serif;"
                                  align="left">
                                  <div class="v-text-align"
                                    style="font-size: 14px; color: #7e7b7b; line-height: 140%; text-align: left; word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;"><em><span
                                          style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;">According
                                          to our records, the following Invoice is overdue:</span></em></p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ebeef0;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <div class="u-col u-col-33p33"
                      style="max-width: 320px;min-width: 183.33px;display: table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px 10px;font-family:'Montserrat',sans-serif;"
                                  align="left">
    
                                  <h4 class="v-text-align"
                                    style="margin: 0px; color: #720c10; line-height: 140%; text-align: center; word-wrap: break-word; font-family: arial,helvetica,sans-serif; font-size: 15px; font-weight: 400;">
                                    <strong>Invoice Due Date</strong>
                                  </h4>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;"
                                  align="left">
                                  <div class="v-text-align"
                                    style="font-size: 14px; color: #8b8989; line-height: 140%; text-align: center; word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;">${id}</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="u-col u-col-33p33"
                      style="max-width: 320px;min-width: 183.33px;display: table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px 10px;font-family:'Montserrat',sans-serif;"
                                  align="left">
                                  <h4 class="v-text-align"
                                    style="margin: 0px; color: #720c10; line-height: 140%; text-align: center; word-wrap: break-word; font-family: arial,helvetica,sans-serif; font-size: 15px; font-weight: 400;">
                                    <strong>Due Date</strong>
                                  </h4>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;"
                                  align="left">
                                  <div class="v-text-align"
                                    style="font-size: 14px; color: #8b8989; line-height: 140%; text-align: center; word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;">${due_date}</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="u-col u-col-33p33"
                      style="max-width: 320px;min-width: 183.33px;display: table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px 10px;font-family:'Montserrat',sans-serif;"
                                  align="left">
                                  <h4 class="v-text-align"
                                    style="margin: 0px; color: #720c10; line-height: 140%; text-align: center; word-wrap: break-word; font-family: arial,helvetica,sans-serif; font-size: 15px; font-weight: 400;">
                                    <strong>Amount</strong>
                                  </h4>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 15px;font-family:'Montserrat',sans-serif;"
                                  align="left">
                                  <div class="v-text-align"
                                    style="font-size: 14px; color: #8b8989; line-height: 140%; text-align: center; word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;"><strong>$ ${due_amount} </strong></p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row"
                  style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f7f7f7;">
                  <div
                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <div class="u-col u-col-100"
                      style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <div
                          style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                          <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0"
                            cellspacing="0" width="100%" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 20px 20px;font-family:'Montserrat',sans-serif;"
                                  align="left">
                                  <div class="v-text-align"
                                    style="font-size: 14px; color: #7e7b7b; line-height: 140%; text-align: left; word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;"><em><span
                                          style="font-family: Montserrat, sans-serif; font-size: 14px; line-height: 19.6px;">If
                                          the Invoice is due more than 5 days then a late fee of  $<strong>10</strong> will
                                          be added.</span></em></p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>`
}

module.exports = genertaeHTML