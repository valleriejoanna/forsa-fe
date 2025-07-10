import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  // MixedWidget10,
  // MixedWidget11,
  ListsWidget2,
  // ListsWidget3,
  // ListsWidget4,
  ListsWidget6,
  // TablesWidget5,
  TablesWidget10,
  // MixedWidget8,
} from '../../../_metronic/partials/widgets'
import { MixedWidgetTemp1 } from '../../../_metronic/partials/widgets/mixed/MixedWidgetTemp1'
// import { ListsWidget5 } from '../../../_metronic/partials/widgets/lists/ListsWidget5'
// import CompanySizeContext from '../../../_metronic/layout/components/header/CompanySizeContext'

const DashboardPage: FC = () => {
  // const { companySize } = useContext(CompanySizeContext);
  return (
    <>
      {/* <div className='row gy-5 gx-xl-8'>
        <div className='col-xxl-12'>
          <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
      </div> */}
      
      {/* begin:: Big */}
      {/* {companySize === 'big' &&  */}
      <>
        <div className='row gy-5 g-xl-8'>
          <div className='col-xxl-4'>
            <MixedWidget2
              className='card-xl-stretch mb-xl-8'
              chartColor='danger'
              chartHeight='20px'
              strokeColor='#cb1e46'
            />
          </div>
          <div className='col-xxl-8'>
            <MixedWidgetTemp1
              className='card-xxl-stretch mb-5 mb-xl-8'
              chartColor='primary'
              chartHeight='175px'
            />
            {/* <MixedWidget11
              className='card-xxl-stretch mb-5 mb-xl-8'
              chartColor='primary'
              chartHeight='175px'
            /> */}
          </div>
        </div>

        <div className='row gy-5 g-xl-8'>
          <div className='col-xl-12'>
            <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
          </div>
        </div>

        <div className='row g-5 g-xl-8'>
          <div className='col-xxl-8'>
            <ListsWidget6 className='card-xxl-stretch mb-xl-3' />
          </div>
          <div className='col-xxl-4'>
            <ListsWidget2 className='card-xl-stretch mb-xl-8' />
          </div>
        </div>
      </>
      {/* } */}
      {/* end:: Big */}
      
      {/* begin:: Medium */}
      {/* {companySize === 'medium' &&
      <>
        <div className='row gy-5 g-xl-8'>
          <div className='col-xxl-4'>
            <MixedWidget2
              className='card-xl-stretch mb-xl-8'
              chartColor='danger'
              chartHeight='200px'
              strokeColor='#cb1e46'
            />
          </div>
          <div className='col-xxl-4'>
            <MixedWidget8
              className='card-xxl-stretch mb-xl-3'
              chartColor='success'
              chartHeight='150px'
            />
          </div>
          <div className='col-xxl-4'>
            <MixedWidget11
              className='card-xxl-stretch-50 mb-5 mb-xl-8'
              chartColor='primary'
              chartHeight='175px'
            />
            <MixedWidget10
              className='card-xxl-stretch-50 mb-5 mb-xl-8'
              chartColor='primary'
              chartHeight='150px'
            />
          </div>
        </div>

        <div className='row gy-5 g-xl-8'>
          <div className='col-xl-4'>
            <ListsWidget5 className='card-xl-stretch mb-xl-8' />
          </div>
          <div className='col-xl-8'>
            <ListsWidget6 className='card-xxl-stretch mb-xl-3' />
          </div>
        </div>

        <div className='row g-5 gx-xxl-8'>
          <div className='col-xxl-12'>
            <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
          </div>
        </div>
      </>} */}
      {/* end:: Medium */}
      
      {/* begin:: Small */}
      {/* {companySize === 'small' &&
      <>
        <div className='row gy-5 g-xl-8'>
          <div className='col-xl-4'>
            <MixedWidget2
              className='card-xl-stretch mb-xl-8'
              chartColor='danger'
              chartHeight='200px'
              strokeColor='#cb1e46'
            />
          </div>
          <div className='col-xl-8'>
            <ListsWidget6 className='card-xxl-stretch mb-xl-3' />
          </div>
        </div>

        <div className='row g-5 gx-xxl-8'>
          <div className='col-xxl-12'>
            <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
          </div>
        </div>
      </>} */}
      {/* end:: Small */}
    </>
  )
}

const DashboardWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Overview</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}