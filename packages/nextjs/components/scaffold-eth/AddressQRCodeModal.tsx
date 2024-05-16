import { QRCodeSVG } from "qrcode.react";
import { Address as AddressType } from "viem";
import { Address } from "~~/components/scaffold-eth";

export const ADDRESS_QR_MODAL_ID = "qrcode-modal";

type AddressQRCodeModalProps = {
  address: AddressType;
};

export const AddressQRCodeModal = ({ address }: AddressQRCodeModalProps) => {
  return (
    <>
      <div>
        <input type="checkbox" id={ADDRESS_QR_MODAL_ID} className="modal-toggle" />
        <label htmlFor={ADDRESS_QR_MODAL_ID} className="modal cursor-pointer">
          <label className="modal-box relative">
            {/* dummy input to capture event onclick on modal box */}
            <input className="h-0 w-0 absolute top-0 left-0" />
            <label htmlFor={ADDRESS_QR_MODAL_ID} className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
              ✕
            </label>
            <div className="space-y-3 py-6">
              <div className="flex space-x-4 flex-col items-center gap-6">
                <QRCodeSVG value={address} size={256} />
                <Address address={address} format="long" disableAddressLink />
              </div>
            </div>
          </label>
        </label>
      </div>
    </>
  );
};
