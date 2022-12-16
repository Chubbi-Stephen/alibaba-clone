import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonToolbar, Dropdown } from 'rsuite'
import { AiOutlineBars } from 'react-icons/ai'

const BottomNav = () => {
  return (
    <section className="border-b-2 p-5">
      <nav className="w-full flex items-center justify-between">
        <ul className="w-[70%]">
          <div className="flex items-center justify-between">
            <div className="border-r-2">
              <ButtonToolbar>
                <Dropdown
                  title="Category"
                  trigger="hover"
                  icon={<AiOutlineBars />}
                >
                  <Dropdown.Menu title="Active Menu">
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                    <Dropdown.Item>Active Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </div>
            <div>Ready to Ship</div>
            <div>Personal Protective E...</div>
            <div>Trade Shows</div>
            <div>
              <ButtonToolbar>
                <Dropdown title="Buyer Central" activeKey="e-2">
                  <Dropdown.Menu title="Active Menu">
                    <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </div>
            <div>
              <ButtonToolbar>
                <Dropdown title="Sell on Alibaba.com" activeKey="e-2">
                  <Dropdown.Menu title="Active Menu">
                    <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </div>
            <div>
              <ButtonToolbar>
                <Dropdown title="Help" activeKey="e-2">
                  <Dropdown.Menu title="Active Menu">
                    <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </div>
          </div>
        </ul>
        <ul className="w-[20%]">
          <div className="flex items-center justify-around">
            <div className="border-l-2 px-6">
              <ButtonToolbar>
                <Dropdown title="Eng-USD" activeKey="e-2">
                  <Dropdown.Menu title="Active Menu">
                    <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </div>
            <div className="border-l-2 px-6">
              <ButtonToolbar>
                <Dropdown title="Ship to Nigeria" activeKey="e-2">
                  <Dropdown.Menu title="Active Menu">
                    <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </div>
          </div>
        </ul>
      </nav>
    </section>
  )
}

export default BottomNav
